import dotenv from "dotenv"
dotenv.config()
const { apiKey, authDomain, projectId, databaseURL, storageBucket, messagingSenderId, appId } = process.env

const firebaseConfig =  {
    apiKey,
    authDomain,
    projectId,
    databaseURL,
    storageBucket,
    messagingSenderId,
    appId
}

export default firebaseConfig