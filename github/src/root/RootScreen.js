import React from 'react';
import {router} from '../common';
import {TabNavigator, StackNavigator, TabBarBottom} from 'react-navigation';

class RootScreen extends React.Component {
	render() {
		return (<Navigator />)
	}
}

const Tab = TabNavigator({
	users: {
		...router.userListScreen,
		navigationOptions: ({navigation}) => ({
			tabBarLabel: '用户'
		})
	},
	search: {
		...router.searchReposScreen,
		navigationOptions: () => ({
			tabBarLabel: '搜索'
		})
	},
	mine: {
		...router.mineScreen,
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
	Tab: {screen: Tab},
	...router
}, {
	navigationOptions: {
		headerBackTitle: null,
		headerTintColor: '#333333',
		showIcon: true
	}
});

export default RootScreen;
