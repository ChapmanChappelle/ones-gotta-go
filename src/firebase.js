import firebase from "firebase"
import "firebase/firestore"


var firebaseConfig = {
   apiKey: "AIzaSyAhOieshAEU2-Sw_HOtSWSSl0k76af5QOk",
   authDomain: "one-gotta-go.firebaseapp.com",
   projectId: "one-gotta-go",
   storageBucket: "one-gotta-go.appspot.com",
   messagingSenderId: "986465326461",
   appId: "1:986465326461:web:a8e47bc75ec3717f8ae814",
   measurementId: "G-4BM355515D"
 };

 firebase.initializeApp(firebaseConfig)

 export default firebase
