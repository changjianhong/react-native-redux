import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';
import Actions from '../action/userActions';
import { color } from '../common';
import NavigationItem from '../components/NavigationItem';

class MineScreen extends React.Component {
	static navigationOptions = ({navigation}) => ({
		headerTitle: '我的',
		headerStyle: {backgroundColor: color.pumpkin},
		headerRight: (
      <NavigationItem
        title='+'
        onPress = {() => {
          console.log(this);
          navigation.navigate('');
        }}
      />
    )
	})

	constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

	render() {
		const {login} = this.props.user;
		return (
			<TouchableOpacity style={styles.container} activeOpacity={1.0} onPress={this._startAnimation.bind(this)}>
				<Animated.Text style={[styles.animatedView, {transform: [{scale: this.state.bounceValue}]}]}>
					{login}
				</Animated.Text>
			</TouchableOpacity>
		)
	}

	componentDidMount() {
		this.props.getUser({name: 'changjianhong'}).then((json)=>{
			this._startAnimation();
		});
	}

	_startAnimation() {
		this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    ).start();
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1
	},
	animatedView: {
		fontSize: 32,
		textAlign: 'center'
	}
})

const mapStateToProps = (state) => {
	let userData = state.user;
	return {
		user: userData.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: Actions.getUser(dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MineScreen);
