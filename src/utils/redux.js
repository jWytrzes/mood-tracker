import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	theme: 'theme',
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload;
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
