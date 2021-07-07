import firebase from "firebase"

const config = {
    // apiKey: "AIzaSyAovAoC4msXLP13u3-l6ZMLowxq39p_R58",
    // authDomain: "bee-shop-4ee5b.firebaseapp.com",
    // projectId: "bee-shop-4ee5b",
    // storageBucket: "bee-shop-4ee5b.appspot.com",
    // messagingSenderId: "456117310216",
    // appId: "1:456117310216:web:96d9d089a2d60460dad2bd",
    apiKey: "AIzaSyCl9mMb9QPUNxkMxV0rNhKCnz8hFypeqek",
    authDomain: "test-df518.firebaseapp.com",
    projectId: "test-df518",
    storageBucket: "test-df518.appspot.com",
    messagingSenderId: "802328774193",
    appId: "1:802328774193:web:3f41ab8873637c195e7710",
    measurementId: "G-4M6ZZW4DH3",
}

const app = firebase.initializeApp(config)

export default app