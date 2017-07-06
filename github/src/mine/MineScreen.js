import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

class MineScreen extends React.Component {
	static navigationOptions = {
		headerTitle: '个人详情'
	}
	render() {
		return (
			<Text>text</Text>
		)
	}
}

export default connect(null, null)(MineScreen);
