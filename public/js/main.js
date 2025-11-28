// main.js - Initialize Firebase and export services used by the app

// Use the CDN-hosted modular SDK so this file works when loaded as a
// browser module (script type="module").
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js';

// Firebase configuration for the new Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyAAZRzHUysD9f4QjWQTC_Vuhvtf9yKTsxI",
  authDomain: "damascus-translation-ser-95c5a.firebaseapp.com",
  projectId: "damascus-translation-ser-95c5a",
  storageBucket: "damascus-translation-ser-95c5a.firebasestorage.app",
  messagingSenderId: "427504697962",
  appId: "1:427504697962:web:b1c9750affc7e3e77ac013",
  measurementId: "G-CN1SEZGZMH"
};

// Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
let analytics = null;
try {
  analytics = getAnalytics(app);
} catch (e) {
  // Analytics may fail to initialize in non-browser or blocked environments
  console.warn('Firebase analytics not initialized:', e && e.message ? e.message : e);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export { analytics };