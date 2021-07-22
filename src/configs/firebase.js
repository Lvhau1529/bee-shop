import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDSL7zMB1aB0G8ECR1_7IbY3V0qhYTuCaE",
  authDomain: "bee-shop-f73d0.firebaseapp.com",
  projectId: "bee-shop-f73d0",
  storageBucket: "bee-shop-f73d0.appspot.com",
  messagingSenderId: "478089494339",
  appId: "1:478089494339:web:fae17bbb6a2a63f80e39f6"
};

const app = firebase.initializeApp(config);

export default app;
