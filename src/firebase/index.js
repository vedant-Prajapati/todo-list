import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8cpPx6yz_FMjEePJ9RiFYuf_1Wj4cl-k",
  authDomain: "todo-app-96f24.firebaseapp.com",
  projectId: "todo-app-96f24",
  storageBucket: "todo-app-96f24.appspot.com",
  messagingSenderId: "171307536890",
  appId: "1:171307536890:web:9d2b661af1f39ea1c7d443"
};
firebase.initializeApp(firebaseConfig);

export default firebase;