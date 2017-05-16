import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root.reducer';
import thunk from 'redux-thunk';
import {createNavigationEnabledStore} from '@expo/ex-navigation';

const createStoreWithNavigation = createNavigationEnabledStore({
	createStore,
	navigationStateKey: 'navigation',
});

export default (initialState) => {
	return createStoreWithNavigation(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);
}