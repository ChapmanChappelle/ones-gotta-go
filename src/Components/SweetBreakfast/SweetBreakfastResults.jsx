import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./SweetBreakfast.css"
import pancakesImg from "./pancakes.png"
import wafflesImg from "./Waffles.png"
import frenchtoastImg from "./frenchtoast.png"
import crepesImg from "./crepes.png"
import firebase from "../../firebase"

export const SweetBreakfastResults = () => {
   // so I can access the data
   const [pancakes, setPancakes] = useState()
   const [waffles, setWaffles] = useState()
   const [frenchToast, setFrenchToast] = useState()
   const [crepes, setCrepes] = useState()

   // request to database
   const getData = () => {
      // temps
      let pancakeCount
      let waffleCount
      let frenchToastCount
      let crepeCount

      //call to firestore
      const db = firebase.firestore()
      const docRef = db.collection("collection").doc("SweetBreakfast")
      docRef
         .get()
         .then(function (doc) {
            if (doc.exists) {
               // display all fields
               console.log("Document data:", doc.data())
               pancakeCount = doc.get("Pancakes")
               waffleCount = doc.get("Waffles")
               frenchToastCount = doc.get("FrenchToast")
               crepeCount = doc.get("Crepes")
               // putting them in the state
               setPancakes(pancakeCount)
               setWaffles(waffleCount)
               setFrenchToast(frenchToastCount)
               setCrepes(crepeCount)
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
   }, [pancakes,waffles,frenchToast,crepes])

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Breakfast Foods</h1>
         <div className="gallery">
            <ul>
               <li>
                  <img src={pancakesImg} alt="pancakes" />
                  <p>Votes: {pancakes}</p>
               </li>
               <li>
                  <img src={wafflesImg} alt="waffles" />
                  <p>Votes: {waffles}</p>
               </li>
               <li>
                  <img src={frenchtoastImg} alt="french toast" />
                  <p>Votes: {frenchToast}</p>
               </li>
               <li>
                  <img src={crepesImg} alt="crepes" />
                  <p>Votes: {crepes}</p>
               </li>
            </ul>
         </div>
         <Link to="/2">
            <button id="nextPage">Next</button>
         </Link>
      </div>
   )
}

export default SweetBreakfastResults
