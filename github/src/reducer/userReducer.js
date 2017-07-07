import { combineReducers } from 'redux'
import UserActions from '../action/userActions';

/**
{
	user:{
		users: {
			refreshing:bool
			users:[]
		}
		user: {}
	}
}
*/


const users = (state = {}, action) => {
	console.log(action.type);
	switch(action.type) {
		case UserActions.GET_USERS_BEFORE: {
			return {...state, refreshing: true};
		}
		case UserActions.GET_USERS: {
			let users = {...state, refreshing: false, users:action.data};
			return users;
		}
		case UserActions.GET_USERS_FAILURE: {
			return {...state, refreshing: false}
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
