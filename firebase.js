import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB0xI4bK5AKUZm5_X6Wy0trUxkDa8tRQ_c",
    authDomain: "court-queue-prototype.firebaseapp.com",
    databaseURL: "https://court-queue-prototype.firebaseio.com",
    projectId: "court-queue-prototype",
    storageBucket: "court-queue-prototype.appspot.com",
    messagingSenderId: "676437752698",
    appId: "1:676437752698:web:eeb4013a8a7ea96f7e74c3",
    measurementId: "G-ZCGDRLNFGL"
  };
  
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  const firestore = firebase.firestore()
  
  export default firebase

  export { firestore }