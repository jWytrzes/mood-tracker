import { endpoints } from './constants';
import { db, auth } from '../firebase';
import store, { setUserData } from './redux';
import { moodsArray, randomMessages } from './constants';

export const getFormattedDate = (date = new Date()) => {
	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	const yyyy = date.getFullYear();

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

export const genereateRandomData = () => {
	const userId = auth.currentUser.uid;
	if (userId) {
		const now = new Date();
		const yearAgo = new Date();
		yearAgo.setFullYear(now.getFullYear() - 1);

		let days = [];
		for (let d = yearAgo; d <= now; d.setDate(d.getDate() + 1)) {
			days.push(new Date(d));
		}

		days.forEach((day) => {
			const dayKey = getFormattedDate(day);
			db.ref(`${endpoints.users}${userId}${endpoints.moodData}/${dayKey}`).set({
				mood: moodsArray[(Math.random() * moodsArray.length) | 0],
				note: randomMessages[(Math.random() * randomMessages.length) | 0],
			});
		});

		updateUserDataInStore(userId);
	}
};
