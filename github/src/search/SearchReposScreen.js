import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

class SearchReposScreen extends React.Component {

	static propTypes = {

	}

	static defaultProps = {

	}

	static navigationOptions = ({navigation}) => ({
		headerRight: (
			<SearchBar />
		)
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View></View>
		)
	}
}



export default SearchReposScreen;
