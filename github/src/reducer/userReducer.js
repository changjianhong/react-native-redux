import { combineReducers } from 'redux'
import UserActions from '../action/userActions';

/*
{
	user:{
		users: [],
		user: {}
	}
}
*/

const users = (state = null, action) => {
	console.log(action.type);
	switch(action.type) {
		case UserActions.GET_USERS: {
			let users = action.data;
			return users;
		}
		default: {
			return state;
		}
	}
}

const user = (state = {}, action) => {
	switch (action.type) {
		case UserActions.GET_USER: {
			let userInfo = action.data;
			return userInfo;
		}
		default:
			return state;
	}
}

const multiUserReducer = combineReducers({
	users,
	user
});

export default {['user']: multiUserReducer};
