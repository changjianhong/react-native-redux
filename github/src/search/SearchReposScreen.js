import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
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
			<SearchBar onChangeText={searchBarDidChange}/>
		)
	});

	constructor(props) {
		super(props);
		signal = this.searchBarDidChange.bind(this);
	}

	searchBarDidChange(text) {
		console.log(text);
		this.props.getRepos(text);
	}

	render() {
		const {repos} = this.props;
		console.log(repos);
		return (
			<View>
				{repos.map((item, index) => {
					console.log(index);
					return (<Text key={index}>{item.description}</Text>)
				})}
			</View>
		)
	}
}


let signal;
const searchBarDidChange = (text) => {
	if (signal && typeof signal == 'function') {
		signal(text);
	}
}


const mapStateToProps = (state) => {
	let reposData = state.repos;
	return {
		repos: reposData && reposData.repos.items
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getRepos: reposActions.getRepos(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchReposScreen);
