import React from 'react';
import {Text, View} from 'react-native';

import Styles from './homeScreen.styles';

export default class HomeScreen extends React.Component {

	render() {
		return (
			<View style={Styles.home}>
				<Text>Home</Text>
			</View>
		);
	}
}