// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import 'firebase/compat/auth'
import app from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyB--zz26Us5m5n_N0iQY7_hHuAIFp50MFI",
    authDomain: "fake-business.firebaseapp.com",
    projectId: "fake-business",
    storageBucket: "fake-business.appspot.com",
    messagingSenderId: "499396918937",
    appId: "1:499396918937:web:eb8b40326c96b1609bc208",
    measurementId: "G-CB3QSN7L6K"
};
//adding class

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.default.auth();

    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
// Initialize Firebase

//adding
export default Firebase;