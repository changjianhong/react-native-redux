import { combineReducers } from 'redux'
import ReposActions from '../action/searchRepoActions';

const repos = (state = {}, action) => {
	switch (action.type) {
		case ReposActions.GET_REPOS_BEFORE: {
			return {...state, refreshing: true};
		}
		case ReposActions.GET_REPOS: {
			console.log(action.data);
			return {...state, refreshing: false, repos:action.data};
		}
		case ReposActions.GET_REPOS_FAILURE: {
			return {...state, refreshing: false}
		}
		default:
			return state;
	}
}

const multiUserReducer = combineReducers({
	repos
});

export default {['repos']: multiUserReducer};
