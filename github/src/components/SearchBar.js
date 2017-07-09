import React from 'react';
import screen from '../common/screen';
import color from '../common/color';
import { View, Image, TextInput, StyleSheet, LayoutAnimation, NativeModules } from 'react-native';
import Button from 'apsl-react-native-button';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
const linear = LayoutAnimation.create(200, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity);

const searchBarAnimatedState = {
  inputWidth: screen.width - 68,
  cancelBtnTextColor: color.pumpkin,
  iconMarginLeft: - screen.width / 2 + 22,
  selectionColor: 'black'
}

const searchBarNoAnimatedState = {
  inputWidth: screen.width - 40,
  cancelBtnTextColor: 'transparent',
  iconMarginLeft: -7,
  selectionColor: 'transparent'
}

class SearchBar extends React.Component {

  static propTypes = {
    onChangeText: React.PropTypes.func
  }

	constructor(props) {
		super(props);
		this.state = {...searchBarNoAnimatedState}
	}

	_onFocus = () => {
    LayoutAnimation.configureNext.bind(null, linear, () => {
      this.setState({
        selectionColor: searchBarAnimatedState.selectionColor
      });
    })();
    this.setState({...searchBarAnimatedState, ...{selectionColor: searchBarNoAnimatedState.selectionColor}});
	}

  _onBlur = () => {
    console.log('onBlur');
    LayoutAnimation.configureNext.bind(null, linear)();
    this.setState({...searchBarNoAnimatedState});
  }

  _cancelBtnDidClicked = () => {
    console.log('_cancelBtnDidClicked');
    this._textInput.clear();
    this._textInput.blur();
  }

	render() {
		return (
			<View style={styles.container}>
				<TextInput
          ref={textInput => (this._textInput = textInput)}
          selectionColor = {this.state.selectionColor}
					onFocus = {this._onFocus}
          onBlur = {this._onBlur}
          onChangeText = {this.props.onChangeText}
          style={[styles.textInput, {width: this.state.inputWidth}]}

				/>
				<Button style={[styles.button]} textStyle={[styles.buttonTextStyle, {color: this.state.cancelBtnTextColor}]} onPress={this._cancelBtnDidClicked}>取消</Button>
        <Image source={require('../img/search.png')} style={[styles.icon, {marginLeft: this.state.iconMarginLeft}]}/>

			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: screen.width,
		flexDirection: 'row',
		backgroundColor :'white'
	},
	textInput: {
		height: 28,
		marginLeft: 20,
		marginTop: 8,
		borderColor: 'transparent',
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: color.palegrey,
    paddingLeft: 18,
    fontSize: 14
	},
  icon: {
    position: 'absolute',
    width: 14,
    height: 14,
    marginLeft: -7,
    marginTop: -7,
    top: '50%',
    left: '50%'
  },
	button: {
		marginTop: 8,
    borderColor: 'transparent',
		width: 44,
		height: 28,
		borderRadius: 0,
	},
	buttonTextStyle: {
		fontSize: 14,
		color: '#777777',
	}
});

export default SearchBar;
