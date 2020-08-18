import { endpoints } from './constants';
import { db } from '../firebase';
import store, { setUserData } from './redux';

export const getFormattedDate = () => {
	const today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth() + 1;
	const yyyy = today.getFullYear();

	if (dd < 10) {
		dd = `0${dd}`;
	}

	if (mm < 10) {
		mm = `0${mm}`;
	}

	return `${dd}-${mm}-${yyyy}`;
};

export const updateUserDataInStore = (userId) => {
	if (userId) {
		db.ref(`${endpoints.users}${userId}`)
			.once('value')
			.then((snapshot) => {
				store.dispatch(setUserData(snapshot.val()));
			});
	} else {
		store.dispatch(setUserData(null));
	}
};
