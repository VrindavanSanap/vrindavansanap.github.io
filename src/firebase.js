import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlzIFhsDYliefkhuwT3VT8q6pNPlmfFDM",
    authDomain: "mini-projects-8a5f2.firebaseapp.com",
    projectId: "mini-projects-8a5f2",
    storageBucket: "mini-projects-8a5f2.appspot.com",
    messagingSenderId: "818666275224",
    appId: "1:818666275224:web:cb0903069c2c79f0bdabed",
    measurementId: "G-FZL60FFQ8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
let analytics;
if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}