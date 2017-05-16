export const LoginScreenActions = {
	loginRequired: 'loginRequired'
};

export class LoginScreenActionCreators {

	loginRequired() {
		return {
			type: LoginScreenActions.loginRequired
		}
	}
}