import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Entertainment.css"
import booksImg from "./books.png"
import moviesImg from "./movies.png"
import musicImg from "./music.png"
import podcastsImg from "./podcasts.png"
import firebase from "../../firebase"

export const EntertainmentResults = () => {
   // so I can access the data
   const [books, setBooks] = useState()
   const [movies, setMovies] = useState()
   const [music, setMusic] = useState()
   const [podcasts, setPodcasts] = useState()

   // request to database
   const getData = () => {
      // temps
      let booksCount
      let moviesCount
      let musicCount
      let podcastsCount

      //call to firestore
      const db = firebase.firestore()
      const docRef = db.collection("collection").doc("Entertainment")
      docRef
         .get()
         .then(function (doc) {
            if (doc.exists) {
               // display all fields
               console.log("Document data:", doc.data())
               booksCount = doc.get("Books")
               moviesCount = doc.get("Movies")
               musicCount = doc.get("Music")
               podcastsCount = doc.get("Podcasts")
               // putting them in the state
               setBooks(booksCount)
               setMovies(moviesCount)
               setMusic(musicCount)
               setPodcasts(podcastsCount)
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
   }, [books,movies,music,podcasts])

   return (
      <div id="container">
         <h1 id="category">One's Gotta Go: Entertainment!</h1>
         <div className="gallery">
            <ul>
               <li>
                  <img src={booksImg} alt="books" />
                  <p>Votes: {books}</p>
               </li>
               <li>
                  <img src={moviesImg} alt="movies" />
                  <p>Votes: {movies}</p>
               </li>
               <li>
                  <img src={musicImg} alt="music" />
                  <p>Votes: {music}</p>
               </li>
               <li>
                  <img src={podcastsImg} alt="podcasts" />
                  <p>Votes: {podcasts}</p>
               </li>
            </ul>
         </div>
         <Link to="/6">
            <button id="nextPage">Next</button>
         </Link>
      </div>
   )
}

export default EntertainmentResults
