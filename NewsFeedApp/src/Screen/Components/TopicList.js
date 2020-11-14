import React, { Component, PropTypes } from 'react';
import {
	View,
	Text,
	Image,
	ListView,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import ProgressBar from '../global/ProgressBar';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class TopicsLIst extends Component {
   constructor(props) {
		super(props);
                this.state = {
			isLoading: true,
	        }
	}
   componentDidMount() {
		var self = this;
		setTimeout(function () {
			self.setState({ isLoading: false });
		}, 1);
	}
   render() {
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
				<View style={styles.listContainer}>
				</View>
		);
	}
}