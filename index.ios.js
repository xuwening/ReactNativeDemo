/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import App from './app/containers/app'


// import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, FooterTab, Content } from 'native-base';

const WEBVIEW_REF = 'webview';
const DEFAULT_URL = 'https://www.baidu.com';


export default class chinaMobile extends Component {

  static initState = {
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
  }

  static urls = {
    tab1: DEFAULT_URL,
    tab2: 'https://www.bing.com',
    tab3: 'https://mail.163.com',
    tab4: 'https://mail.126.com',
    tab5: 'https://www.sohu.com',
  }

  constructor(props) {
    super(props);
    this.state = {...chinaMobile.initState, tab1:true, url: DEFAULT_URL} 
  }
  

  toggleTabitem(tabName) {

    let tmp = {...chinaMobile.initState}
    tmp[tabName] = true
    tmp['url'] = chinaMobile.urls[tabName]

    this.setState(tmp)
  }

  render() {

    return (
      <Container>
        <Header style={{backgroundColor: 'transparent'}}>
          <Left >
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Button transparent>
                <Icon name='ios-qr-scanner' style={{fontSize: 27}}/>
              </Button>
              <Button transparent>
                <Icon name='notifications' style={{fontSize: 27}}/>
              </Button>
            </View>
          </Left>
          <Body>
              <Button iconRight light> 
                <Text>西安</Text>
                <Icon name='ios-arrow-down-outline'/>
              </Button>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={{fontSize: 27}}/>
            </Button>
            <Button transparent>
              <Icon name='chatbubbles' style={{fontSize: 25}}/>
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
          <WebView
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            style={styles.webView}
            source={{uri: this.state.url}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            onNavigationStateChange={this.onNavigationStateChange}
            onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
            startInLoadingState={true}
            scalesPageToFit={this.state.scalesPageToFit}
          />
        </Content>

      <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.toggleTabitem('tab1')} active={this.state.tab1}>
              <Icon name="home" active={this.state.tab1}/>
              <Text style={styles.text}>首页</Text>
            </Button>
            <Button vertical onPress={() => this.toggleTabitem('tab2')} active={this.state.tab2}>
              <Icon name="apps" active={this.state.tab2}/>
              <Text style={styles.text}>分类</Text>
            </Button>
            <Button vertical onPress={() => this.toggleTabitem('tab3')} active={this.state.tab3}>
              <Icon active name="compass" active={this.state.tab3}/>
              <Text style={styles.text}>发现</Text>
            </Button>
            <Button vertical onPress={() => this.toggleTabitem('tab4')} active={this.state.tab4}>
              <Icon name="cart" active={this.state.tab4}/>
              <Text style={styles.text}>商城</Text>
            </Button>
            <Button vertical onPress={() => this.toggleTabitem('tab5')} active={this.state.tab5}>
              <Icon name="contact" active={this.state.tab5}/>
              <Text style={styles.text}>我的</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}




const styles = StyleSheet.create({
  content: {
    flex:1,
    backgroundColor: '#ff0000',
    minHeight: 200,
  },
  webView: {
      flex:1,
      backgroundColor: '#ff0000',
      minHeight: 200,
    },
  text: {
    fontSize: 12,
    textAlign: 'center',
  },
  icon: {
    fontSize: 27,
    textAlign: 'center',
  },
});

// import SimpleTabs from './app/containers/MainApp'
// import StacksOverTabs from './app/containers/StacksOverTabs'

AppRegistry.registerComponent('demo', () => App);
