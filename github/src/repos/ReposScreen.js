import React from 'react';
import { connect } from 'react-redux';
import SearchRoposItem from './search/SearchReposItem';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import reposActions from '../action/searchRepoActions';
import NavigationItem from '../components/NavigationItem';

class ReposScreen extends React.Component {

	static propTypes = {
		repos: React.PropTypes.array
	}

	static defaultProps = {
		repos: []
	}

	static navigationOptions = ({navigation}) => ({
		headerTitle: 'react native',
		headerStyle: {backgroundColor: 'white'},
		headerRight: (
			<NavigationItem
				title =  {'搜索'}
				onPress = {() => {navigation.navigate('searchReposScreen')}}
			/>
		)
	});

	componentDidMount() {
		this.props.getRepos();
	}

	_keyExtractor = (item) => {
		return item.id;
	}

	_renderItem = ({item})  => {
		return (
			<SearchRoposItem
				data = {item}
				onPress = {() => {this.props.navigation.navigate('')}}
			/>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.repos}
					extraData={this.state}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderItem}
				/>
				<ActivityIndicator
					animating = {this.props.refreshing}
					style = {styles.centering}
					size = 'large'
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centering: {
		position: 'absolute',
    top: '50%',
		left: '50%',
		marginLeft: -18,
		marginTop: -18
  },
})


const mapStateToProps = (state) => {
	let reposData = state.repos.reactNativeRepos;
	console.log(reposData && reposData.refreshing);
	return {
		repos: reposData.repos && reposData.repos.items,
		refreshing: reposData && reposData.refreshing
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getRepos: reposActions.getReactNativeRepos(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposScreen);
