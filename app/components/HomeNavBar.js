
import React from 'react';
import { View, Button, Text } from 'react-native';

import NavigationBar from 'react-native-navbar';


const RightView = ({ navigation }) => (
  <View style={{flexDirection:'row'}}>

    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jordan' })}
      title="Open"
    />

    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go"
    />

  </View>
)

const LeftButton = ({navigation}) => (

    <View>
        <Button
        onPress={() => navigation.navigate('NotifSettings')}
        title="screen"
        />
        <Button
        onPress={() => navigation.navigate('SettingsTab')}
        title="Go"
        />
    </View>
)

const TitleButton = ({navation, titleName}) => (

    <View>
        <Text>{titleName}</Text>
        
    </View>
)


export default class HomeNavBar extends React.Component {

    render() {

        return (
                <NavigationBar
                    containerStyle={{backgroundColor: 'transparent'}}
                    title={<TitleButton navigation={this.props.navigation} titleName='hello'/>}
                    lefgButton={<LeftButton navigation={this.props.navigation}/>}
                    rightButton={<RightView navigation={this.props.navigation}/>}
                />
        )
    }
}

