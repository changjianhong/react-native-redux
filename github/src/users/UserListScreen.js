import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import userActions from '../action/userActions';
import UserListItem from './UserListItem';

const key = 1;

class UserListScreen extends React.Component {
	static navigationOptions = {
		headerTitle: '用户'
	}

	static propTypes = {
		users: React.PropTypes.array,
		refreshing: React.PropTypes.bool
	}

	static defaultProps = {
		users: [],
		refreshing: false
	}

	constructor(props) {
		super(props);
	}

	_keyExtractor = (item, index) => {
		return item.login;
	}

	_renderItem = ({item}) => {
		return (
			<UserListItem
				data={item}
				onPress = {() => {this.props.navigation.navigate('webViewScreen', {uri: item.html_url})}}
			/>
		)
	}

	_refresh = () => {
		this.props.getUsers();
	}

	render() {
		return (
			<FlatList
				data={this.props.users}
				extraData={this.state}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
				onRefresh = {this._refresh}
				refreshing = {this.props.refreshing}
			/>
		)
	}

	componentDidMount() {
		this._refresh();
	}
}

const mapStateToProps = (state, ownProps) => {
	let usersData = state.user.users;
	console.log(usersData.refreshing);
	return {
		users: usersData.users,
		refreshing: usersData.refreshing
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: userActions.getUsers(dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen);
