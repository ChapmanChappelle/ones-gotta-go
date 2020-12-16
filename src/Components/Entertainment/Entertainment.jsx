import React from "react"
import { Link } from "react-router-dom"
import booksImg from "./books.png"
import moviesImg from "./movies.png"
import musicImg from "./music.png"
import podcastsImg from "./podcasts.png"
import firebase from "../../firebase"

export const Entertainment = () => {
   const db = firebase.firestore()
   const storyRef = db.collection("collection").doc("Entertainment")

   let booksVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Books: increment,
      })
   }

   let moviesVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Movies: increment,
      })
   }

   let musicVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Music: increment,
      })
   }

   let podcastsVote = () => {
      const increment = firebase.firestore.FieldValue.increment(1)
      storyRef.update({
         Podcasts: increment,
      })
   }

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Entertainment Mediums!</h1>
         <div className="gallery">
            <ul>
               <li onClick={booksVote}>
                  <Link to="/5r">
                     <img src={booksImg} alt="books" />
                  </Link>
               </li>
               <li onClick={moviesVote}>
                  <Link to="/5r">
                     <img src={moviesImg} alt="movies" />
                  </Link>
               </li>
               <li onClick={musicVote}>
                  <Link to="/5r">
                     <img src={musicImg} alt="music" />
                  </Link>
               </li>
               <li onClick={podcastsVote}>
                  <Link to="/5r">
                     <img src={podcastsImg} alt="podcasts" />
                  </Link>
               </li>
            </ul>
         </div>
         <Link to="/5r">
            <button id="showResults">Show Results (no vote)</button>
         </Link>
      </div>
   )
}

export default Entertainment
