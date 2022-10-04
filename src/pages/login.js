import {Link} from "react-router-dom"
import '../assets/Css/login.css';
import React, {useState} from 'react';



export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")
// let loginForm = document.getElementById('login-form')
// let loginUsername = document.getElementById('login-username')
// let loginPassword = document.getElementById('login-password')

const headers = {
    'Content-Type':'application/json'
}

const baseUrl = 'http://localhost:8080/user'

const handleSubmit = async (e) =>{
    e.preventDefault()

    let bodyObj = {
        username,
        password
        // username: document.getElementById('login-username').value,
        // password: document.getElementById('login-password').value
    }

    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: headers
    })
        .catch(err => console.error(err.message))

    const responseArr = await response.json()

    if (response.status === 200){
        document.cookie = `userId=${responseArr[1]}`
        window.location.replace(responseArr[0])
    }

    // loginForm.addEventListener("submit", handleSubmit)
}
    return (
        <main className="container">
        <div>
            <link rel="stylesheet" href="../assets/Css/login.css" type="text/css"></link>
            <div className="login">
                <h1 className="h1">LOGIN</h1>
                <br/>

                <br/>
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className="form-username">
                        <label htmlFor="login-username" className="p-tags">Username:</label>
                        <input onChange={(e)=>setUsername(e.target.value)} type="text" className="user-form" id="login-username" placeholder="Username"></input>
                    </div>
                    <div className="form-password">
                        <label htmlFor="login-password" className="p-tags">Password:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="pass-form" id="login-password" placeholder="Password"></input>
                    </div>
                    <div className="sub-button">
                        <button id="submit-button" type="submit" className="sub-button">Submit</button>
                    </div>
                    <br/>
                    <div className="register-but">
                        <Link to="/" className="register-but">Create New Account</Link>
                        <br/>
                    </div>
                </form>
            </div>
        </div>
        </main>
    );
};
