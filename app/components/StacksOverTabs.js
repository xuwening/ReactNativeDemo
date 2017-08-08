/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, RefreshControl } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';

import Counter from './counter';
import IconList from './iconList'
import SecondView from './secondView'
import HomePage from './homePage'
import Mine from './Mine'
import Chat from './Chat'
import Shopping from './shopping'

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
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
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <HomePage banner="Home Screen" navigation={navigation} />
);

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

const MySettingsScreen = ({ navigation }) => (
  <Counter banner="Settings Screen" navigation={navigation} />
);

const MyCatsScreen = ({ navigation }) => (
  <Chat banner="Settings Screen" navigation={navigation} />
);


const MyShoppingScreen = ({ navigation }) => (
  <Shopping banner="Settings Screen" navigation={navigation} />
);


const MyPersonScreen = ({ navigation }) => (
  <Mine banner="Settings Screen" navigation={navigation} />
);

const SecondScreen = ({navigation}) => (
  <SecondView navigation={navigation} />
);


const TabNav = TabNavigator(
  {
    MainTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Home',
        header: null,
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: MySettingsScreen,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-people' : 'ios-people-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ShoppingTab: {
      screen: MyShoppingScreen,
      path: '/shopping',
      navigationOptions: {
        title: 'shopping',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    CatsTab: {
      screen: MyCatsScreen,
      path: '/cats',
      navigationOptions: {
        title: 'cats',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-cart' : 'ios-cart-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    PersonTab: {
      screen: MyPersonScreen,
      path: '/person',
      navigationOptions: {
        title: 'person',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },            
  },
 
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,    
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications',
    },
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!`;
    },
  },
  secondPage: {
    screen: SecondScreen,
    path: '/second/:name',
    navigationOptions: ({ navigation }) => {

      headerBackTitle: '返回';
    },    
  }
},
{
  headerMode: 'screen',
});

export default StacksOverTabs;
