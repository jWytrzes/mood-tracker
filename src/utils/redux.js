import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const {
	actions: { setUserData },
	reducer: userData,
} = userSlice;

export const userSelector = (state) => state.userData;

const store = configureStore({
	reducer: { userData },
});

export default store;
