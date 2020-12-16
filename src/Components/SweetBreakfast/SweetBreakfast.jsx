import React from "react"
import { Link } from "react-router-dom"
import "./SweetBreakfast.css"
import pancakesImg from "./pancakes.png"
import wafflesImg from "./Waffles.png"
import frenchtoastImg from "./frenchtoast.png"
import crepesImg from "./crepes.png"
import firebase from "../../firebase"

export const SweetBreakfast = () => {
   const db = firebase.firestore()
   const storyRef = db.collection("collection").doc("SweetBreakfast")

   let pancakeVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Pancakes: increment,
      })
   }

   let waffleVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Waffles: increment,
      })
   }

   let frenchToastVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         FrenchToast: increment,
      })
   }

   let crepesVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Crepes: increment,
      })
   }

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Breakfast Foods</h1>
         <div className="gallery">
            <ul>
               <li onClick={pancakeVote}>
                  <Link to="/1r">
                     <img src={pancakesImg} alt="pancakes" />
                  </Link>
               </li>
               <li onClick={waffleVote}>
                  <Link to="/1r">
                     <img src={wafflesImg} alt="waffles" />
                  </Link>
               </li>
               <li onClick={frenchToastVote}>
                  <Link to="/1r">
                     <img src={frenchtoastImg} alt="french toast" />
                  </Link>
               </li>
               <li onClick={crepesVote}>
                  <Link to="/1r">
                     <img src={crepesImg} alt="crepes" />
                  </Link>
               </li>
            </ul>
         </div>
         <Link to="/1r">
            <button id="showResults">Show Results (no vote)</button>
         </Link>
      </div>
   )
}

export default SweetBreakfast
