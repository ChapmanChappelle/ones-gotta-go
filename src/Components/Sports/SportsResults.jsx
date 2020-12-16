import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Sports.css"
import footballImg from "./football.png"
import baseballImg from "./baseball.png"
import basketballImg from "./basketball.png"
import hockeyImg from "./hockey.png"
import firebase from "../../firebase"

export const SportsResults = () => {
   // so I can access the data
   const [football, setFootball] = useState()
   const [baseball, setBaseball] = useState()
   const [basketball, setBasketball] = useState()
   const [hockey, setHockey] = useState()

   // request to database
   const getData = () => {
      // temps
      let footballCount
      let baseballCount
      let basketballCount
      let hockeyCount

      //call to firestore
      const db = firebase.firestore()
      const docRef = db.collection("collection").doc("Sports")
      docRef
         .get()
         .then(function (doc) {
            if (doc.exists) {
               // display all fields
               console.log("Document data:", doc.data())
               footballCount = doc.get("Football")
               baseballCount = doc.get("Baseball")
               basketballCount = doc.get("Basketball")
               hockeyCount = doc.get("Hockey")
               // putting them in the state
               setFootball(footballCount)
               setBaseball(baseballCount)
               setBasketball(basketballCount)
               setHockey(hockeyCount)
            } else {
               // doc.data() will be undefined in this case
               console.log("No such document!")
            }
         })
         .catch(function (error) {
            console.log("Error getting document:", error)
         })
   }

   // reflexts state change before render (user vote lags tho)
   useEffect(() => {
      getData()
   }, [football,baseball,basketball,hockey])

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Sports!</h1>
         <div className="gallery">
            <ul>
               <li>
                  <img src={footballImg} alt="football" />
                  <p>Votes: {football}</p>
               </li>
               <li>
                  <img src={baseballImg} alt="baseball" />
                  <p>Votes: {baseball}</p>
               </li>
               <li>
                  <img src={basketballImg} alt="basketball" />
                  <p>Votes: {basketball}</p>
               </li>
               <li>
                  <img src={hockeyImg} alt="hockey" />
                  <p>Votes: {hockey}</p>
               </li>
            </ul>
         </div>
         <Link to="/3">
            <button id="nextPage">Next</button>
         </Link>
      </div>
   )
}

export default SportsResults
