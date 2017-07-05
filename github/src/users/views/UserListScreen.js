import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import UserActions from '../actions';
import UserListItem from './UserListItem';

const key = 1;

class UserListScreen extends React.Component {
	static navigationOptions = {
		headerTitle: '用户'
	}

	static propTypes = {
		users: React.PropTypes.array
	}

	static defaultProps = {
		users: [],
	}

	constructor(props) {
		super(props);
		this.state = {refreshing: false};
	}

	_keyExtractor = (item, index) => {
		return item.login;
	}

	_renderItem = ({item}) => {
		return (
			<UserListItem data={item}/>
		)
	}

	_refresh = () => {
		this.setState({refreshing: true});
		this.props.getUsers().then(() => {
			this.setState({refreshing: false});
		});
	}

	render() {
		return (
			<FlatList
				data={this.props.users}
				extraData={this.state}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
				onRefresh = {this._refresh}
				refreshing = {this.state.refreshing}
			/>
		)
	}

	componentDidMount() {
		this._refresh();
	}
}

const mapStateToProps = (state, ownProps) => {
	let userData = state;
	return {
		users: userData.users,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: UserActions.getUsers(dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen);
