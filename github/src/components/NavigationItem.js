import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class NavigationItem extends React.PureComponent {
	render() {
		const {icon, title, onPress, itemStyle} = this.props;
		let view = icon ? <Image style={[styles.icon, itemStyle]} source={icon}/> : <Text style={[styles.title, itemStyle]}>{title}</Text>;

		return (
			<TouchableOpacity style={styles.container} onPress={onPress}>
				{view}
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 28,
		height: 28,
		margin: 8
	},
	title: {
		fontSize: 14,
		color: '#333333',
		margin: 8
	}
});

export default NavigationItem;
