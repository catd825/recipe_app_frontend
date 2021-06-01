import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const UserContext = createContext(); //creates a store

export const UserProvider = ({ children }) => {

    const router = useRouter();
    const [user, setUser] = useState(false);

      useEffect( () => {
        const token = getToken()
        if(token){
          retrieveUser(token)
        }
      }, []);

      const getToken = () => {
        return localStorage.getItem("token")
      }

      const retrieveUser = () => {
        const token = getToken()
        if (token) {
          fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`},
          })
          .then(response => response.json())
          .then(data => {
              setUser({user: data.user})}
          )
        } else {
            router.push("/login")
        }
      }
      const loginHandler = (userInfo) => {
        const configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          'body': JSON.stringify({user: userInfo})
        }
        fetch("http://localhost:3000/api/v1/login", configObj)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("token", data.jwt)
          setUser({user: data.user}, router.push("/recipes"))
        })
      }

      const signupHandler = (userInfo) => {
        const configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          'body': JSON.stringify({user: userInfo})
        }
        fetch("http://localhost:3000/api/v1/users", configObj)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("token", data.jwt)
          setUser({user: data.user}, router.push("/recipes"))
        })
      }

      const logOutHandler = () => {
        localStorage.clear()
        router.push("/login")
        setUser({user: false}, () => console.log(user))
      }

    console.log(user)
    return (

        <UserContext.Provider value={{ user, loginHandler, signupHandler, logOutHandler }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}