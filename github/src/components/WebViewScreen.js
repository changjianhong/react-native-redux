import React from 'react';
import { WebView, InteractionManager } from 'react-native';

class WebViewScreen extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		headerStyle: { backgroundColor: 'white' },
		title: navigation.state.params.title,
	});

	componentDidMount() {
		InteractionManager.runAfterInteractions(() => {
			this.props.navigation.setParams({ title: '加载中...' })
		})
	}

	_onLoadEnd(e: any) {
		if (e.nativeEvent.title.length > 0) {
			this.props.navigation.setParams({ title: e.nativeEvent.title })
		}
	}

	render() {
		const data = this.props.navigation.state.params;
		return (
			<WebView
				style = {{flex: 1}}
				source={{uri: data.uri}}
				onLoadEnd={(e) => this._onLoadEnd(e)}
				automaticallyAdjustContentInsets={false}
				scalesPageToFit
			/>
		)
	}
}

export default WebViewScreen;
