import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Superheroes.css"
import batmanImg from "./batman.png"
import spidermanImg from "./spider-man.png"
import captainAmericaImg from "./captainAmerica.png"
import supermanImg from "./superman.png"
import firebase from "../../firebase"

export const SuperherosResults = () => {
   // so I can access the data
   const [batman, setBatman] = useState()
   const [spiderman, setSpiderman] = useState()
   const [captainAmerica, setCaptainAmerica] = useState()
   const [superman, setSuperman] = useState()

   // request to database
   const getData = () => {
      // temps
      let batmanCount
      let spidermanCount
      let captainAmericaCount
      let supermanCount

      //call to firestore
      const db = firebase.firestore()
      const docRef = db.collection("collection").doc("Superheroes")
      docRef
         .get()
         .then(function (doc) {
            if (doc.exists) {
               // display all fields
               console.log("Document data:", doc.data())
               batmanCount = doc.get("Batman")
               spidermanCount = doc.get("Spiderman")
               captainAmericaCount = doc.get("CaptainAmerica")
               supermanCount = doc.get("Superman")
               // putting them in the state
               setBatman(batmanCount)
               setSpiderman(spidermanCount)
               setCaptainAmerica(captainAmericaCount)
               setSuperman(supermanCount)
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
   }, [batman,spiderman,captainAmerica,superman])

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Superheroes!</h1>
         <div className="gallery">
            <ul>
               <li>
                  <img src={batmanImg} alt="batman" />
                  <p>Votes: {batman}</p>
               </li>
               <li>
                  <img src={spidermanImg} alt="spiderman" />
                  <p>Votes: {spiderman}</p>
               </li>
               <li>
                  <img src={captainAmericaImg} alt="captain america" />
                  <p>Votes: {captainAmerica}</p>
               </li>
               <li>
                  <img src={supermanImg} alt="superman" />
                  <p>Votes: {superman}</p>
               </li>
            </ul>
         </div>
         <Link to="/5">
            <button id="nextPage">Next</button>
         </Link>
      </div>
   )
}

export default SuperherosResults
