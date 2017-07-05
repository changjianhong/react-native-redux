import UserActions from './actions';

const reducer = (state = {user: []}, action) => {
	console.log(action.type);
	switch(action.type) {
		case UserActions.GET_USERS: {
			return {...state, ...{users: action.data}}
		}
		default: {
			return state;
		}
	}
}

export default reducer;
