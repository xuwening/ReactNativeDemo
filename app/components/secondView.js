
import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

import WebViewContainer from './webviewContainer'

export default class SecondView extends Component {

  render() {

   const rightButtonConfig = {
      title: 'share',
      handler: () => alert('hello!'),
    };

    const leftButtonConfig = {
      title: 'back',
      handler: () => this.props.nav.pop(),
    };

    const titleConfig = {
      title: 'Second View',
    };

    return (
        <WebViewContainer webViewUrl={this.props.navigation.state.params.actionUrl}/>
    );

  }
}