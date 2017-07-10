import { combineReducers } from 'redux'
import ReposActions from '../action/searchRepoActions';

const reactNativeRepos = (state = {}, action) => {
	switch (action.type) {
		case ReposActions.GET_REACT_NATIVE_REPOS_BEFORE: {
			return {...state, refreshing: true};
		}
		case ReposActions.GET_REACT_NATIVE_REPOS: {
			console.log(action.data);
			return {...state, refreshing: false, repos:action.data};
		}
		case ReposActions.GET_REACT_NATIVE_REPOS_BEFORE_FAILURE: {
			return {...state, refreshing: false}
		}
		default:
			return state;
	}
}

const searchRepos = (state = {}, action) => {
	switch (action.type) {
		case ReposActions.SEARCH_REPOS_BEFORE: {
			return {...state, refreshing: true};
		}
		case ReposActions.SEARCH_REPOS: {
			console.log(action.data);
			return {...state, refreshing: false, repos:action.data};
		}
		case ReposActions.SEARCH_REPOS_FAILURE: {
			return {...state, refreshing: false}
		}
		default:
			return state;
	}
}

const multiUserReducer = combineReducers({
	reactNativeRepos,
	searchRepos
});

export default {['repos']: multiUserReducer};
