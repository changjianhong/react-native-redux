import React from 'react';
import {router} from '../common';
import MineScreen from '../mine/MineScreen';
import UserListScreen from '../users/UserListScreen';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';

class RootScreen extends React.Component {
	render() {
		return (<Navigator />)
	}
}

const Tab = TabNavigator({
	users: {
		screen: UserListScreen,
		navigationOptions: () => ({
			tabBarLabel: '用户'
		})
	},
	mine: {
		screen: MineScreen,
		navigationOptions: () => ({
			tabBarLabel: '我的'
		})
	}
}, {
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	animationEnabled: false,
	lazy: true,
	tabBarOptions: {
		activeTintColor: '#ED6C00',
		inactiveTintColor: '#979797',
		style: {
			backgroundColor: '#ffffff'
		}
	}
});

const Navigator = StackNavigator({
	Tab: {screen: Tab}
}, {
	navigationOptions: {
		headerBackTitle: null,
		headerTintColor: '#333333',
		showIcon: true
	}
});

export default RootScreen;
