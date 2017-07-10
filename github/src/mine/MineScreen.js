import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Actions from '../action/userActions';
import { color } from '../common';
import NavigationItem from '../components/NavigationItem';

class MineScreen extends React.Component {
	static navigationOptions = ({navigation}) => ({
		headerTitle: '个人详情',
		headerStyle: {backgroundColor: color.pumpkin},
		headerRight: (
      <NavigationItem
        title='+'
        onPress = {() => {
          console.log(this);
          navigation.navigate('');
        }}
      />
    )
	})

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
