import firebase from 'firebase'

const firebaseConfig = {
	apiKey: "AIzaSyArEmGv7Neip49u7qpulS2TKnKJH11krDQ",
	authDomain: "instacool-a1c07.firebaseapp.com",
	databaseURL: "https://instacool-a1c07.firebaseio.com",
	projectId: "instacool-a1c07",
	storageBucket: "instacool-a1c07.appspot.com",
	messagingSenderId: "776328461841",
	appId: "1:776328461841:web:529356903ce52314dafbb0",
	measurementId: "G-RHD1ZXY0NJ"
};

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
