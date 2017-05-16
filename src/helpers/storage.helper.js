import {AsyncStorage} from 'react-native';

class StorageHelper {

	static get(key) {
		return AsyncStorage.getItem(key);
	}

	static set(key, value) {
		AsyncStorage.setItem(key, value);
	}

	static remove(key) {
		return AsyncStorage.removeItem(key);
	}
}

export default StorageHelper;