import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Heading1, Button } from '../common';

class UserListItem extends React.Component {
	render() {
		const {login, avatar_url} = this.props.data;
		return (
				<TouchableOpacity style={styles.container}>
					<Image source={{uri: avatar_url}}
					style={styles.icon} />
					<View style={styles.rightContainer}>
						<Heading1>{login}</Heading1>
						<View style={styles.rightBottomContainer}>
							<View style={{flexDirection: 'row', height:28}}>
								<Button style={[styles.button, {width: 40}]} textStyle={styles.buttonTextStyle} allowFontScaling={true}>repo</Button>
								<Button style={styles.button} textStyle={styles.buttonTextStyle} allowFontScaling={true}>starred</Button>
								<Button style={styles.button} textStyle={styles.buttonTextStyle} allowFontScaling={true}>followers</Button>
							</View>
						</View>
					</View>
				</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#e0e0e0'
	},
	icon: {
		margin: 8,
		width: 40,
		height: 40,
		borderRadius:4
	},
	rightContainer: {
		flex: 1,
		marginTop: 4,
	},
	rightBottomContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
	},
	button: {
		borderColor: 'transparent',
		width: 60,
		height: 20,
		borderRadius: 0,
	},
	buttonTextStyle: {
		fontSize: 12,
		color: '#777777',
		textAlign: 'left'
	}
})

export default UserListItem;
