import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import color from '../common/color';
import screen from '../common/screen';
import {standardCount} from '../common/count';

class SearchRoposItem extends React.Component {

	render() {
		const {full_name, language, stargazers_count, description, updated_at} = this.props.data;
		let starsCount = standardCount(stargazers_count);
		return (
			<TouchableOpacity style={styles.container}>
				<View style={styles.contentContainer}>
					<View style={styles.top}>
						<Text style={styles.name}>{full_name}</Text>
						<Text style={styles.language}>{language}</Text>
						<Text style={styles.starsCount}>{starsCount}</Text>
					</View>
					<View>
						<Text style={styles.description}>{description}</Text>
						<Text style={styles.update}>Updated on {updated_at}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderColor: '#e0e0e0',
	},
	contentContainer: {
		margin: 8
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	name: {
		flex: 1,
		color: '#82B6E6',
		fontSize: 14,
		marginRight: 16
	},
	language: {
		color: color.textColor,
		fontSize: 10,
		marginRight: 16,
		width: 60
	},
	starsCount: {
		color: color.textColor,
		fontSize: 10,
		width: 40,
		marginRight: 8,
		textAlign: 'right'
	},
	description: {
		marginTop: 8,
		color: color.textColor,
		fontSize: 10
	},
	update: {
		marginTop: 8,
		color: color.textColor,
		fontSize: 10
	}
})

export default SearchRoposItem;
