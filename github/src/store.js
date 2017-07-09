import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './reducer/userReducer';
import reposReducer from './reducer/reposReducer';
import thunk from 'redux-thunk';


export default createStore(combineReducers({
	...userReducer,
	...reposReducer
}), applyMiddleware(thunk));
