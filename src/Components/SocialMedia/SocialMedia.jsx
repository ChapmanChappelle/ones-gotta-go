import React from "react"
import { Link } from "react-router-dom"
import "./SocialMedia.css"
import linkedInImg from "./linkedIn.png"
import tikTokImg from "./TikTok.png"
import twitterImg from "./twitter.png"
import facebookImg from "./facebook.png"
import firebase from "../../firebase"

export const SocialMedia = () => {
   const db = firebase.firestore()
   const storyRef = db.collection("collection").doc("SocialMedia")

   let linkedInVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         LinkedIn: increment,
      })
   }

   let tikTokVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         TikTok: increment,
      })
   }

   let twitterVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Twitter: increment,
      })
   }

   let facebookVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Facebook: increment,
      })
   }

   return (
      <div id="container">
         <h1 id="category">Sports</h1>
         <div className="gallery">
            <ul>
               <li onClick={linkedInVote}>
                  <Link to="/3r">
                     <img src={linkedInImg} alt="LinkedIn" />
                  </Link>
               </li>
               <li onClick={tikTokVote}>
                  <Link to="/3r">
                     <img src={tikTokImg} alt="TikTok" />
                  </Link>
               </li>
               <li onClick={twitterVote}>
                  <Link to="/3r">
                     <img src={twitterImg} alt="Twitter" />
                  </Link>
               </li>
               <li onClick={facebookVote}>
                  <Link to="/3r">
                     <img src={facebookImg} alt="Facebook" />
                  </Link>
               </li>
            </ul>
         </div>
         <Link to="/3r">
            <button id="showResults">Show Results (no vote)</button>
         </Link>
      </div>
   )
}

export default SocialMedia
