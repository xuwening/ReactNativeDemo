
import React, {Component} from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';

export default class WebViewContainer extends Component {

    render() {
        return (
            <View style={{ flex: 1}}>
                <WebView
                        ref={'webView'}
                        automaticallyAdjustContentInsets={false}
                        style={{flex:1, ...this.props.style}}
                        source={{uri: this.props.webViewUrl}}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        decelerationRate="normal"
                        onNavigationStateChange={this.onNavigationStateChange}
                        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                        startInLoadingState={true}
                        scalesPageToFit={true}/>            
            </View>
        )
    }
}
