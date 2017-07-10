import React from 'react';
import { connect } from 'react-redux';
import SearchRoposItem from './SearchReposItem';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import reposActions from '../action/searchRepoActions';

class SearchReposScreen extends React.Component {

	static propTypes = {
		repos: React.PropTypes.array
	}

	static defaultProps = {
		repos: []
	}

	static navigationOptions = ({navigation}) => ({
		headerStyle: {backgroundColor: 'white'},
		headerRight: (
			<SearchBar
				onSubmitEditing={searchBarSubmitEditing}
			/>
		)
	});

	constructor(props) {
		super(props);
		signal = this.searchBarSubmitEditing.bind(this);
	}

	componentDidMount() {
		this.props.getRepos('react-native');
	}

	searchBarSubmitEditing(text) {
		console.log(text);
		this.props.getRepos(text);
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

let signal;
const searchBarSubmitEditing = (text) => {
	if (signal && typeof signal == 'function') {
		signal(text);
	}
}

const mapStateToProps = (state) => {
	let reposData = state.repos.repos;
	console.log(reposData && reposData.refreshing);
	return {
		repos: reposData.repos && reposData.repos.items,
		refreshing: reposData && reposData.refreshing
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getRepos: reposActions.getRepos(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchReposScreen);
