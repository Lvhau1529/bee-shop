import firebase from "firebase"

const config = {
    apiKey: "AIzaSyAovAoC4msXLP13u3-l6ZMLowxq39p_R58",
    authDomain: "bee-shop-4ee5b.firebaseapp.com",
    projectId: "bee-shop-4ee5b",
    storageBucket: "bee-shop-4ee5b.appspot.com",
    messagingSenderId: "456117310216",
    appId: "1:456117310216:web:96d9d089a2d60460dad2bd"
}

const app = firebase.initializeApp(config)

export default app