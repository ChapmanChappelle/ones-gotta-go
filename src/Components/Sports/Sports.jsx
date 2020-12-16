import React from "react"
import { Link } from "react-router-dom"
import "./Sports.css"
import footballImg from "./football.png"
import baseballImg from "./baseball.png"
import basketballImg from "./basketball.png"
import hockeyImg from "./hockey.png"
import firebase from "../../firebase"

export const Sports = () => {
   const db = firebase.firestore()
   const storyRef = db.collection("collection").doc("Sports")

   let footballVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Football: increment,
      })
   }

   let baseballVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Baseball: increment,
      })
   }

   let basketballVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Basketball: increment,
      })
   }

   let hockeyVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Hockey: increment,
      })
   }

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Sports</h1>
         <div className="gallery">
            <ul>
               <li onClick={footballVote}>
                  <Link to="/2r">
                     <img src={footballImg} alt="football" />
                  </Link>
               </li>
               <li onClick={baseballVote}>
                  <Link to="/2r">
                     <img src={baseballImg} alt="baseball" />
                  </Link>
               </li>
               <li onClick={basketballVote}>
                  <Link to="/2r">
                     <img src={basketballImg} alt="basketball" />
                  </Link>
               </li>
               <li onClick={hockeyVote}>
                  <Link to="/2r">
                     <img src={hockeyImg} alt="hockey" />
                  </Link>
               </li>
            </ul>
         </div>
         <Link to="/2r">
            <button id="showResults">Show Results (no vote)</button>
         </Link>
      </div>
   )
}

export default Sports
