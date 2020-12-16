import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import linkedInImg from "./linkedIn.png"
import tikTokImg from "./TikTok.png"
import twitterImg from "./twitter.png"
import facebookImg from "./facebook.png"
import firebase from "../../firebase"

export const SocialMediaResults = () => {
   // so I can access the data
   const [linkedIn, setLinkedIn] = useState()
   const [tikTok, setTikTok] = useState()
   const [twitter, setTwitter] = useState()
   const [facebook, setFacebook] = useState()

   // request to database
   const getData = () => {
      // temps
      let linkedInCount
      let tikTokCount
      let twitterCount
      let facebookCount

      //call to firestore
      const db = firebase.firestore()
      const docRef = db.collection("collection").doc("SocialMedia")
      docRef
         .get()
         .then(function (doc) {
            if (doc.exists) {
               // display all fields
               console.log("Document data:", doc.data())
               linkedInCount = doc.get("LinkedIn")
               tikTokCount = doc.get("TikTok")
               twitterCount = doc.get("Twitter")
               facebookCount = doc.get("Facebook")
               // putting them in the state
               setLinkedIn(linkedInCount)
               setTikTok(tikTokCount)
               setTwitter(twitterCount)
               setFacebook(facebookCount)
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
   }, [linkedIn, tikTok, twitter, facebook])

   return (
      <div id="container">
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <h1 id="category">One's Gotta Go: Social Media!</h1>
         <div className="gallery">
            <ul>
               <li>
                  <img src={linkedInImg} alt="LinkedIn" />
                  <p className="results">Votes: {linkedIn}</p>
               </li>
               <li>
                  <img src={tikTokImg} alt="TikTok" />
                  <p className="results">Votes: {tikTok}</p>
               </li>
               <li>
                  <img src={twitterImg} alt="french toast" />
                  <p className="results">Votes: {twitter}</p>
               </li>
               <li>
                  <img src={facebookImg} alt="Facebook" />
                  <p className="results">Votes: {facebook}</p>
               </li>
            </ul>
         </div>
         <Link to="/4">
            <button id="nextPage">Next</button>
         </Link>
      </div>
   )
}

export default SocialMediaResults
