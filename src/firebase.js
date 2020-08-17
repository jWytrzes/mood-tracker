import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAZa21T2juv10Z7P0m_tIGob_naB-Aam5k',
	authDomain: 'moodtracker-24d44.firebaseapp.com',
	databaseURL: 'https://moodtracker-24d44.firebaseio.com',
	projectId: 'moodtracker-24d44',
	storageBucket: 'moodtracker-24d44.appspot.com',
	messagingSenderId: '190923345565',
	appId: '1:190923345565:web:8b1357f7b3509cc7e24e74',
	measurementId: 'G-736EBQ0FKK',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
