import { combineReducers } from 'redux'
import ReposActions from '../action/searchRepoActions';

const repos = (state = {}, action) => {
	switch (action.type) {
		// case ReposActions.GET_REPOS_BEFORE: {
		// 	return state;
		// }
		case ReposActions.GET_REPOS: {
			console.log(action.data);
			return action.data;
		}
		default:
			return state;
	}
}

const multiUserReducer = combineReducers({
	repos
});

export default {['repos']: multiUserReducer};
