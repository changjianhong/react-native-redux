import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import reposActions from '../action/searchRepoActions';

class SearchReposScreen extends React.Component {

	static propTypes = {

	}

	static defaultProps = {

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
		this.props.getRepos(text).then((json) => {
			console.log(json);
		});
	}

	render() {
		return (
			<View></View>
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
	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getRepos: reposActions.getRepos(dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchReposScreen);
