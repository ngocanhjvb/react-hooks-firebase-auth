import firebase, {auth, firestore, storage} from "firebase";


const config = {
    apiKey: "AIzaSyBRjt36DIxdQxIQQBjfa7OnREtUJwQUVps",
    authDomain: "react-hook-redux-7f2f2.firebaseapp.com",
    databaseURL: "https://react-hook-redux-7f2f2.firebaseio.com",
    projectId: "react-hook-redux-7f2f2",
    storageBucket: "react-hook-redux-7f2f2.appspot.com",
    messagingSenderId: "1054190193633",
    appId: "1:1054190193633:web:bb2480eadb7ba17b0fa0a0",
    measurementId: "G-VQF950RR4G"
};


class Firebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(config);
        firebase.analytics();
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }
}