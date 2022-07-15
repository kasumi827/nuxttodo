import { initializeApp } from 'firebase/app'

const config = {
    apiKey: "AIzaSyBlxihdj0jeKdhKBd8w_b5t3DxJO2ZAMXo",
            authDomain: "nuxttodo-4b83d.firebaseapp.com",
            databaseURL: "https://nuxttodo-4b83d-default-rtdb.firebaseio.com",
            projectId: "nuxttodo-4b83d",
            storageBucket: "nuxttodo-4b83d.appspot.com",
            messagingSenderId: "22077865415",
            appId: "1:22077865415:web:4592130afe395bbe2c6de2",
            measurementId: "G-EFFPRB5GY9"
}

const firebaseApp = initializeApp(config)

export default firebaseApp