import firebase from "firebase"
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDNnPlCRCi67hJ3qNCeKeNd8V7ZPlRFCfk",
    authDomain: "rnfirebasenotes.firebaseapp.com",
    projectId: "rnfirebasenotes",
    storageBucket: "rnfirebasenotes.appspot.com",
    messagingSenderId: "97586623645",
    appId: "1:97586623645:web:dc090eaee1b691d303d074"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database