
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles'


export default class IconButton extends Component {

	iconPressAction() {
        // this.props.nav.push({args: {url: this.props.args.actionUrl, title: this.props.args.title}, component: page});
        this.props.navigation.navigate('secondPage', { actionUrl: this.props.args.actionUrl })
	}

	render() {

		return (

				<TouchableOpacity onPress={this.iconPressAction.bind(this)}>
				  <View style={{alignItems: 'center', justifyContent: 'flex-start', }}>
					<Image style={styles.iconButton} source={{uri: this.props.args.iconUrl}}/>
					<Text> {this.props.args.title} </Text>
				  </View>
				</TouchableOpacity>
			);
	}
}
