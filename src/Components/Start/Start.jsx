import React from "react"
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
                     alt=""
                  />
               </li>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt=" "
                  />
               </li>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt=""
                  />
               </li>
               <li>
                  <img
                     src="http://placehold.it/360x240"
                     alt=""
                  />
               </li>
            </ul>
         </div>
      </div>
   )
}

export default Start
