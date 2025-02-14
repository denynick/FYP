import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxJI6Lu1dw5Sx2YYbXG8RMuGPnhBGt2YY",
    authDomain: "fyp-nick.firebaseapp.com",
    projectId: "fyp-nick",
    storageBucket: "fyp-nick.firebasestorage.app",
    messagingSenderId: "623193559159",
    appId: "1:623193559159:web:f6c28df3dcdafa435fb672"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;