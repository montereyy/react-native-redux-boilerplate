import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import Styles from './loginScreen.styles';

class LoginScreen extends React.Component {

	render() {
		return (
			<View style={Styles.login}>
				<Text>login</Text>
			</View>
		);
	}

	static mapStateToProps(state) {
		return {
			login: state.login
		}
	}
}

export default connect(LoginScreen.mapStateToProps)(LoginScreen);

