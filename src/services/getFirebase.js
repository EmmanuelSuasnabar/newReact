import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBupu0WZNXGBCT84RY4V-1XN8GoGSOo9sE",
    authDomain: "tiendadeliriumjoyas.firebaseapp.com",
    projectId: "tiendadeliriumjoyas",
    storageBucket: "tiendadeliriumjoyas.appspot.com",
    messagingSenderId: "672245827884",
    appId: "1:672245827884:web:63c11aff2137c135f9c489"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
    return firebase.firestore(app)
  }