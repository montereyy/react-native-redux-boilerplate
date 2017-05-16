import {LoginScreenActions} from './loginScreen.actions';

const reducer = (state = {}, action) => {

	switch (action.type) {
		case LoginScreenActions.loginRequired:
			console.log('Login required reducer');
			return state;
		default:
			return state;
	}
};

export default reducer;