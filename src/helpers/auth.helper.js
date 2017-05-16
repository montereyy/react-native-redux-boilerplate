import StorageHelper from './storage.helper';
import NavigationHelper from './navigation.helper';

class AuthHelper {

	static async initAuth() {
		if(await AuthHelper.isAuthenticated()) {
			// @TODO write code to get user
		} else {
			AuthHelper.goToLogin();
		}
	}

	static goToLogin() {
		NavigationHelper.transition('login');
	}

	static async isAuthenticated() {
		return !!(await AuthHelper.getToken());
	}

	static getToken() {
		return StorageHelper.get('token');
	}

	static setToken(value) {
		StorageHelper.set('token', value);
	}

	static getUser() {
		return StorageHelper.get('user');
	}

	static setUser(value) {
		StorageHelper.set('user', value);
	}

	static removeToken() {
		StorageHelper.remove('token');
	}

	static removeUser() {
		StorageHelper.remove('user');
	}
}

export default AuthHelper;