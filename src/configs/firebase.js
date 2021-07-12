import firebase from "firebase"

const config = {
    apiKey: "AIzaSyCl9mMb9QPUNxkMxV0rNhKCnz8hFypeqek",
    authDomain: "test-df518.firebaseapp.com",
    projectId: "test-df518",
    storageBucket: "test-df518.appspot.com",
    messagingSenderId: "802328774193",
    appId: "1:802328774193:web:3f41ab8873637c195e7710",
    measurementId: "G-4M6ZZW4DH3"
}

const app = firebase.initializeApp(config)

export default app