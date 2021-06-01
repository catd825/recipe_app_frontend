import { useState } from 'react'
import { useUserContext } from '../UserContext/state'

export default function Login () {
    const {loginHandler} = useUserContext();

    const userObj = {
        username: '',
        password: '',
    }

    const [userData, setUserData] = useState(userObj)

    const changeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name,":", e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        loginHandler(userData)
    }
    
    // debugger
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <input name="username" onChange={changeHandler} value={userData.username} type="text" placeholder="Username"></input> <br/>
                <input name="password" onChange={changeHandler} value={userData.password} type="password" placeholder="Password"></input> <br/>
                <input type="submit" ></input>
            </form>
        </div>
    )
}