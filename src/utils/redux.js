import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	theme: 'happy',
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			if (action.payload) {
				state.user = { ...state.user, ...action.payload };
			} else {
				state.user = null;
			}
		},
		changeTheme: (state, action) => {
			state.theme = action.payload;
		},
	},
});

export const {
	actions: { setUserData, changeTheme },
	reducer: userData,
} = userSlice;

export const userSelector = (state) => state.userData;

const store = configureStore({
	reducer: { userData },
});

export default store;
