import React from "react"
import "./Start.css"
import { Link } from "react-router-dom"

export const Start = () => {
   return (
      <div id="container">
         <h1 id="title">One's Gotta Go!</h1>
         <p className="rules">The Rules of the game are this:</p>
         <p className="rules">
            You have to imagine which item on the list you could live without
            for the rest of your life. Or if you don't really care to lose any
            of the items you can just click "see result" to see other people's
            answers
         </p>
         <Link to="/1">
            <button id="start">Start the Challenge</button>
         </Link>
      </div>
   )
}

export default Start
