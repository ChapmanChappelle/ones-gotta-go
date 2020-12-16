import React, { useState } from "react"
import "./Start.css"

export const Start = () => {
   return (
      <div id="container">
         <h1 id="category">Category</h1>
         <div className="gallery">
            <ul>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt="First gallery image"
                  />
               </li>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt="Second gallery image"
                  />
               </li>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt="Third gallery image"
                  />
               </li>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt="Fourth gallery image"
                  />
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Start
