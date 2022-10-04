import React from 'react';
import {render} from "react-dom";
import {Link} from "react-router-dom"
import '../assets/Css/home.css';
import homeContainer from "yarn/lib/cli";
// import logo from "../assets/images/home-icon.png"



export default function Home() {
    // let img = document.getElementById('form-img')
    // let address = document.getElementById('form-address')
    // let bedroom = document.getElementById('form-room')
    // let bathroom = document.getElementById('form-bath')
    // let squareFt = document.getElementById('form-sqft')
    // let price = document.getElementById('form-price')
    // let availability = document.getElementById('form-available')

    // calculator elements
    // const value = document.getElementById('cal-value')
    // const interest = document.getElementById('cal-int')
    // const loan = document.getElementById('cal-loan')

    const headers = {
        'Content-Type': 'application/json'
    }

    const baseUrl = 'http://localhost:8080/homes/'

    // const handleClick = async (e) => {
    //     e.preventDefault()
    //
    //     let bodyObj = {
    //         principal: value.value,
    //         interest: interest.value,
    //         mortgage: loan.value
    //     }
    //     const response = await fetch(`${baseUrl}/homes/user/{userId}`, {
    //         method: "POST",
    //         body: JSON.stringify(bodyObj),
    //         headers: headers
    //     })
    //         .catch(err => console.error(err.message))
    //
    //     const responseArr = await response.json()
    //
    //     if (response.status === 200) {
    //         document.cookie = `userId=${responseArr[1]}`
    //         window.location.replace(responseArr[0])
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     let bodyObj = {
    //         img: img.value,
    //         address: address.value,
    //         bedrooms: bedroom.value,
    //         bathrooms: bathroom.value,
    //         square_ft: squareFt.value,
    //         price: price.value,
    //         availability: availability.value
    //     }
    //     await addHouse(bodyObj);
    //     document.getElementById("")
    //     }
    // async function addHouse(obj) {
    //     const response = await fetch(`${baseUrl}user/${userId}`, {
    //         method: "POST",
    //         body: JSON.stringify(obj),
    //         headers: headers
    //     })
    //         .catch(err => console.error(err.message))
    //     if (response.status == 200) {
    //         return getHouses(userId);
    //     }
    // }

    // async function getHouses(userId) {
    //     await fetch(`${baseUrl}user/${userId}`, {
    //         method: "GET",
    //         headers: headers
    //     })
    //         .then(response => response.json())
    //         .then(data => createHomeCards(data))
    //         .catch(err => console.error(err))
    // }

    // async function handleDelete(homeId){
    //     await fetch(baseUrl + homeId, {
    //         method: "DELETE",
    //         headers: headers
    //     })
    //         .catch(err => console.error(err))

    //     return getHouses(userId);
    // }

    // async function getHomeById(homeId){
    //     await fetch(baseUrl + homeId, {
    //         method: "GET",
    //         headers: headers
    //     })
    //         .then(res => res.json())
    //         .then(data => populateModal(data))
    //         .catch(err => console.error(err.message))
    // }

    // async function handleHomeEdit(homeId){
    //     let bodyObj = {
    //         id: homeId,
    //         img: img.value,
    //         address: address.value,
    //         bedrooms: bedroom.value,
    //         bathrooms: bathroom.value,
    //         square_ft: squareFt.value,
    //         price: price.value,
    //         availability: availability.value
    //     }

    //     await fetch(baseUrl, {
    //         method: "PUT",
    //         body: JSON.stringify(bodyObj),
    //         headers: headers
    //     })
    //         .catch(err => console.error(err))

    //     return getHouses(userId);
    // }

    // const createHomeCards = (array) => {
    //     homeContainer.innerHTML = ''
    //     array.forEach(obj => {
    //         let homeCard = document.createElement("div")
    //         homeCard.classList.add("h-1")
    //         homeCard.innerHTML = `
    //         <div class="card d-flex" style="width: 18rem; height: 18rem;">
    //             <div class="card-body d-flex flex-column  justify-content-between" style="height: available">
    //                 <p class="card-text">${obj.body}</p>
    //                 <div class="d-flex justify-content-between">
    //                     <button class="btn btn-danger" onclick="handleDelete(${obj.id})">Delete</button>
    //                     <button onclick="getHomeById(${obj.id})" type="button" class="btn btn-primary"
    //                     data-bs-toggle="modal" data-bs-target="#note-edit-modal">
    //                     Edit
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     `
    //         homeContainer.append(homeCard);
    //     })
    // }

    // function handleLogout(){
    //     let c = document.cookie.split(";");
    //     for(let i in c){
    //         document.cookie = /^[^=]+/.exec(c[i])[0]+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    //     }
    // }

    // const populateModal = (obj) =>{
    //     homeBody.innerText = ''
    //     homeBody.innerText = obj.body
    //     updateHomeBtn.setAttribute('data-home-id', obj.id)
    // }

    // getHome(userId);

    // submitForm.addEventListener("submit", handleSubmit)

    // updateHomeBtn.addEventListener("click", (e)=>{
    //     let homeId = e.target.getAttribute('data-home-id')
    //     handlehomeEdit(homeId);
    // })
        return (
            <main>
                <link rel="stylesheet" href="../assets/Css/home.css" type="text/css"></link>
                <div className="logo">
                    <h1 className="h1-logo">Real Estate Engineering</h1>
                    <div className="img-logo">
                    {/*<img src={logo} alt="Image not found" className="img-logo"/>*/}
                    </div>
                </div>

                <div className="pages">
                    <div className="register-but">
                    <Link to="/">Register</Link>
                    <br/>
                    </div>
                    <div className="login-but">
                        <Link to="/login" onClick="handleLogout()">Logout</Link>
                        <br/>
                    </div>
                </div>
                <br></br>

                <div className="form-home">
                    <h2>Add New Houses</h2>
                    <form>
                        <div className="flex-form">
                        <div className="input-home">
                            <label htmlFor="form-img" className="p-tags">Image URl:</label>
                            <input placeholder="ImageURL(text)" type="String" className="form-img" id="form-input"></input>
                        </div>
                        <div className="input-home">
                            <label htmlFor="form-address" className="p-tags">Address:</label>
                            <input placeholder="Address(text)" type="String" className="form-address"
                                   id="form-input"></input>
                        </div>
                        <div className="input-home">
                            <label htmlFor="form-room" className="p-tags">Bedrooms:</label>
                            <input placeholder="Bedrooms(int)" type="int" className="form-room" id="form-input"></input>
                        </div>
                        <div className="input-home">
                            <label htmlFor="form-bath" className="p-tags">Bathrooms:</label>
                            <input placeholder="Bathrooms(int)" type="int" className="form-bath" id="form-input"></input>
                        </div>
                        <div className="input-home">
                            <label htmlFor="form-sqft" className="p-tags">SquareFt:</label>
                            <input placeholder="SquareFt(text)" type="String" className="form-sqft" id="form-input"></input>
                        </div>
                        <div className="input-home">
                            <label htmlFor="form-price" className="p-tags">Home Value:</label>
                            <input placeholder="Price(double)" type="double" className="form-price" id="form-input"></input>
                        </div>
                        <div className="input-home">
                            <label htmlFor="form-available" className="p-tags">Availability:</label>
                            <input placeholder="Availability(double)" type="boolean" className="form-available"
                                   id="form-input"></input>
                        </div>
                        </div>
                        <div className="sub-button">
                            <button type="submit" className="sub-button">Add To Page</button>
                        </div>
                    </form>
                </div>
                <br></br>

                <div className="available-home">
                    <h2 className="ava-color">Available</h2>
                    <div className="added-houses">
                        <section id="houses"></section>
                    </div>
                </div>
                <br></br>
                <div className="sold-home">
                <h2 className="sold-color">Sold</h2>
                    <div>
                        <section id="houses"></section>
                    </div>
                </div>
                <br></br>


                <div className="cal-input">
                    <h2 className="cal-color">Mortgage Calculator</h2>
                    <form>
                        <div>
                            <label className="p-tags">Home Value:</label>
                            <input placeholder="Principle" type="text" className="cal-value" id="form-input"></input>
                        </div>
                        <div>
                            <label className="p-tags">Interest Rate:</label>
                            <input placeholder="Interest" type="text" className="cal-int" id="form-input"></input>
                        </div>

                        <div>
                            <label className="p-tags">Loan Term:</label>
                            <input placeholder="Mortgage" type="text" className="cal-loan" id="form-input"></input>
                        </div>

                        <div className="sub-button">
                            <button type="button" className="sub-button">Calculate</button>
                        </div>
                    </form>
                </div>
            </main>
        );
    };

