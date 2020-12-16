import React from "react"
import { Link } from "react-router-dom"
import batmanImg from "./batman.png"
import spidermanImg from "./spider-man.png"
import captainAmericaImg from "./captainAmerica.png"
import supermanImg from "./superman.png"
import firebase from "../../firebase"

export const Superheroes = () => {
   const db = firebase.firestore()
   const storyRef = db.collection("collection").doc("Superheroes")

   let batmanVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Batman: increment,
      })
   }

   let spidermanVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Spiderman: increment,
      })
   }

   let captainAmericaVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         CaptainAmerica: increment,
      })
   }

   let supermanVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Superman: increment,
      })
   }

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Superheroes!</h1>
         <div className="gallery">
            <ul>
               <li onClick={batmanVote}>
                  <Link to="/4r">
                     <img src={batmanImg} alt="batman" />
                  </Link>
               </li>
               <li onClick={spidermanVote}>
                  <Link to="/4r">
                     <img src={spidermanImg} alt="spiderman" />
                  </Link>
               </li>
               <li onClick={captainAmericaVote}>
                  <Link to="/4r">
                     <img src={captainAmericaImg} alt="captainAmerica" />
                  </Link>
               </li>
               <li onClick={supermanVote}>
                  <Link to="/4r">
                     <img src={supermanImg} alt="superman" />
                  </Link>
               </li>
            </ul>
         </div>
         <Link to="/4r">
            <button id="showResults">Show Results (no vote)</button>
         </Link>
      </div>
   )
}

export default Superheroes
