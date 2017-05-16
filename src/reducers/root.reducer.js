import {NavigationReducer} from '@expo/ex-navigation';
import {combineReducers} from 'redux';

import LoginScreenReducer from '../components/LoginScreen/loginScreen.reducer';

const rootReducer = combineReducers({
	navigation: NavigationReducer,
	login: LoginScreenReducer
});

export default rootReducer;