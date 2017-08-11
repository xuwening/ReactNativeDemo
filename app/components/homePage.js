
import React from 'react';
import { View, Button, ScrollView, RefreshControl } from 'react-native';
import { StackNavigator } from 'react-navigation';

import IconList from './iconList'
import Banner from './banner';
import HomeNavBar from './HomeNavBar'
import WebViewContainer from './webviewContainer'

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
            navBarColor: 'rgba(255, 55, 55, 0.8)'
        }
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {

        const rowData = Array.from(new Array(10))
        .map((val, i) => ({
            text: 'Loaded row ' + (+this.state.loaded + i),
            clicks: 0,
        }))
        .concat(this.state.rowData);

        this.setState({
            loaded: this.state.loaded + 10,
            isRefreshing: false,
            rowData: rowData,
        });
        }, 5000);
    }

    changeNavBarColor(offset) {
        alpha = offset < 0 ? 0 : offset > 80 ? 0.8 : offset / 100
        this.setState({navBarColor: `rgba(255, 55, 55, ${alpha})`})
    }

    render() {

        const navigation = this.props.navigation

        return (
            <View style={{flex:1}}>
                
                <ScrollView
                    ref={(scrollView) => this._scrollView = scrollView}
                    onScroll={(e) => this.changeNavBarColor(e.nativeEvent.contentOffset.y)}
                    scrollEventThrottle={100}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ff0000"
                            title="Loading..."
                            titleColor="#00ff00"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }
                >

                    <Banner navigation={navigation}></Banner>
                    <IconList navigation={navigation}></IconList>
                    <View style={{flex: 1, marginTop: 40}}>
                        <Button
                        onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
                        title="Open profile screen"
                        />
                        <Button
                        onPress={() => navigation.navigate('NotifSettings')}
                        title="Open notifications screen"
                        />
                        <Button
                        onPress={() => navigation.navigate('SettingsTab')}
                        title="Go to settings tab"
                        />
                        <Button onPress={() => navigation.goBack(null)} title="Go back" />
                    </View>
                    <WebViewContainer webViewUrl='https://www.baidu.com' style={{height:800}}/>
                </ScrollView>
                
                <HomeNavBar style={{position: 'absolute', top:0, left: 0, height:64, width:375, backgroundColor: this.state.navBarColor}} navigation={navigation}></HomeNavBar>
                {/*<View style={{position: 'absolute', height:64, width:375, backgroundColor: 'transparent'}}></View>*/}
            </View>
        )
    }
}