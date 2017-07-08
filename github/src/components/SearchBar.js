import React from 'react';
import screen from '../common/screen';
import { View, TextInput, StyleSheet, LayoutAnimation, NativeModules } from 'react-native';
import Button from 'apsl-react-native-button';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			btnDispaly: 'none',
			inputWidth: screen.width - 40
		}
	}

	_onFocus = () => {
		LayoutAnimation.linear();
		this.setState({
			btnDispaly: 'flex',
			inputWidth: screen.width - 80
		})
	}

	render() {
		return (
			<View style={styles.container}>

				<TextInput
					onFocus = {this._onFocus}
					style={[styles.textInput, {width: this.state.inputWidth}]}
					placeholder = '搜索'
					placeholderTextColor = 'red'
				/>
				<Button style={[styles.button, {display: this.state.btnDispaly}]} textStyle={styles.buttonTextStyle}>取消</Button>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: screen.width,
		flexDirection: 'row',
		backgroundColor :'blue'
	},
	textInput: {
		height: 28,
		marginLeft: 20,
		marginTop: 8,
		borderColor: 'red',
		borderWidth: 1,
		borderRadius: 8,
		backgroundColor: 'grey'
	},
	button: {
		marginTop: 8,
		borderColor: 'red',
		width: 44,
		height: 28,
		borderRadius: 0,
	},
	buttonTextStyle: {
		fontSize: 12,
		color: '#777777',
	}
});

export default SearchBar;
