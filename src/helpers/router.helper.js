import {createRouter} from '@expo/ex-navigation';

import LoginScreen from '../components/LoginScreen/loginScreen.component';
import HomeScreen from '../components/HomeScreen/homeScreen.component';

export default createRouter(() => ({
	login: () => LoginScreen,
	home: () => HomeScreen
}));