import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './reducer/userReducer';
import thunk from 'redux-thunk';


export default createStore(combineReducers({
	...userReducer,
}), applyMiddleware(thunk));
