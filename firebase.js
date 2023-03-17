import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0quTRmLkCTK-f_f03m41YfZrSfPwjKNo",
        authDomain: "tirunelveli-police.firebaseapp.com",
        
        projectId: "tirunelveli-police",
        storageBucket: "tirunelveli-police.appspot.com",
        messagingSenderId: "867845699678",
        appId: "1:867845699678:web:72830d717ea143ae935ccf",
        measurementId: "G-TBQE8XVN2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
