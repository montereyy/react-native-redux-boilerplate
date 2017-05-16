import {NavigationActions} from '@expo/ex-navigation';
import Store from '../store';
import Router from './router.helper';

class NavigationHelper {

	static transition(routeName) {
		let navigatorUID = Store.getState().navigation.currentNavigatorUID;
		Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute(routeName)))
	}
}

export default NavigationHelper;