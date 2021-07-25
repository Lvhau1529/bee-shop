import firebase from "firebase"

const config = {
  // apiKey: "AIzaSyDSL7zMB1aB0G8ECR1_7IbY3V0qhYTuCaE",
  // authDomain: "bee-shop-f73d0.firebaseapp.com",
  // projectId: "bee-shop-f73d0",
  // storageBucket: "bee-shop-f73d0.appspot.com",
  // messagingSenderId: "478089494339",
  // appId: "1:478089494339:web:fae17bbb6a2a63f80e39f6"
  apiKey: "AIzaSyAovAoC4msXLP13u3-l6ZMLowxq39p_R58",
  authDomain: "bee-shop-4ee5b.firebaseapp.com",
  projectId: "bee-shop-4ee5b",
  storageBucket: "bee-shop-4ee5b.appspot.com",
  messagingSenderId: "456117310216",
  appId: "1:456117310216:web:96d9d089a2d60460dad2bd"
}

const app = firebase.initializeApp(config)

export default app
