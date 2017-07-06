import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Actions from '../action/userActions';

class MineScreen extends React.Component {
	static navigationOptions = {
		headerTitle: '个人详情'
	}
	render() {
		const {login} = this.props.user;
		return (
			<Text>{login}</Text>
		)
	}

	componentDidMount() {
		this.props.getUser({name: 'changjianhong'}).then((json) => {
			console.log(json);
		});
	}

}

const mapStateToProps = (state) => {
	let userData = state.user;
	return {
		user: userData.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: Actions.getUser(dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MineScreen);
