import { useState } from 'react'
import { useUserContext } from '../UserContext/state'

export default function Login () {
    const {signupHandler} = useUserContext();

    const userObj = {
        username: '',
        password: '',
        name: '',
        bio: ''
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
        signupHandler(userData)
    }
    

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={submitHandler}>
                <input name="username" onChange={changeHandler} value={userData.username} type="text" placeholder="Username"></input> <br/>
                <input name="password" onChange={changeHandler} value={userData.password} type="password" placeholder="Password"></input> <br/>
                <input name="name" onChange={changeHandler} value={userData.name} type="text" placeholder="Name"></input> <br/>
                <textarea name="bio" onChange={changeHandler} value={userData.bio} type="text" placeholder="Tell us about yourself!"></textarea> <br/>
                <input type="submit" ></input>
            </form>
        </div>
    )
}