
import React from 'react';
import { View, Button, ScrollView, RefreshControl } from 'react-native';
import { StackNavigator } from 'react-navigation';

import IconList from './iconList'
import Banner from './banner';
import HomeNavBar from './HomeNavBar'

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
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

    render() {

        const navigation = this.props.navigation
        const titleConfig = {
            title: 'hello',
        }

        const rightButtonConfig = {
              title: 'Next',
              handler: () => alert('hello!'),
        }

        return (
            <ScrollView
                
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

                {/*<HomeNavBar navigation={navigation}></HomeNavBar>*/}
                <Banner></Banner>
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
            </ScrollView>
        )
    }
}