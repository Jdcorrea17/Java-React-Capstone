import React, {useState} from 'react';
import '../assets/Css/register.css';
import { Link} from "react-router-dom";

export default function Register() {
    const [username, setusername] = useState("")
    const[password, setpassword] = useState("")
    // const handleClick = () => {
    //     const registerForm = document.getElementById('register-form');
    //     const registerUsername = document.getElementById('form-username');
    //     const registerPassword = document.getElementById('form-password');

        const headers = {
            'Content-Type': 'application/json'
        }

        const baseUrl = 'http://localhost:8080/'


        const handleSubmit = async (e) => {
            e.preventDefault()
            alert("Hello")
            let bodyObj = {
                username,
                password
            }

            const response = await fetch(`${baseUrl}/register`, {
                method: "POST",
                body: JSON.stringify(bodyObj),
                headers: headers
            })
                .catch(err => console.error(err.message))

            const responseArr = await response.json()

            if (response.status === 200) {
                window.location.replace(responseArr[0])
            }
        }

        // registerForm.addEventListener("submit", handleSubmit)

        // alert("hello");
        return (
            <main className="container">
            <div className="reg-form">
                <div id="grad1"></div>
                <link rel="stylesheet" href="../assets/Css/register.css" type="text/css"></link>
                <div className="container-md">
                    <h1>REGISTER</h1>

                    <br/>
                    <br/>
                    <form id="register-form" onSubmit={handleSubmit}>
                        <div className="form-username">
                            <label htmlFor="register-username" className="p-tags">Username:</label>
                            <input onChange={(e)=>setusername(e.target.value)} type="text" className="form-control" id="register-username"
                                   placeholder="Username"></input>
                        </div>
                        <div className="form-password">
                            <label htmlFor="register-password" className="p-tags">Password:</label>
                            <input onChange={(e)=>setpassword(e.target.value)}
                            type="password" className="form-control" id="register-password"
                                   placeholder="Password"></input>
                        </div>
                        <div className="sub-button">
                            <button id="submit-button" type="submit" className="sub-button">Create Account</button>
                        </div>
                    </form>
                    <div className="pages">
                        <div className="login-but">
                            <Link to="/login">Login</Link>
                            <br/>
                        </div>
                        <div className="home-but">
                            <Link to="/home">Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        );
    };