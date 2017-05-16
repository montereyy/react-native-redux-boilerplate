import Expo from 'expo';
import React from 'react';
import {Text, View, Navigator, AsyncStorage} from 'react-native';
import {NavigationProvider, StackNavigation, NavigationContext} from '@expo/ex-navigation';
import Store from './store';
import {Provider} from 'react-redux';

import Router from './helpers/router.helper';
import Styles from './index.styles';

// Initializing auth (getting user and checking token on app load)
import AuthHelper from './helpers/auth.helper';

AuthHelper.initAuth();

const NavigatorContext = new NavigationContext({
	store: Store,
	router: Router
});

class App extends React.Component {

	render() {
		return (
			<View style={Styles.appContainer}>
				<Provider store={Store}>
					<NavigationProvider context={NavigatorContext}>
						<StackNavigation initialRoute='home' />
					</NavigationProvider>
				</Provider>
			</View>
		);
	}
}

Expo.registerRootComponent(App);
