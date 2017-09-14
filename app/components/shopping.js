'use strict'

import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
} from 'react-native'


export default class Shopping extends React.Component {

    buttonAction() {
        const viewObj =  this.refs['containerView']
        console.log(viewObj)
        // styles.container.backgroundColor = 'orange'
    }


    render() {

        const lists = [1,2,3,4]
        return (
            <TouchableOpacity style={{flex: 1}}>
            <View style={styles.container} ref='containerView'>
                <View style={{flex:-1, flexGrow:1, backgroundColor:'red', margin: 1}}>
                    <View style={{width:150, height:100, backgroundColor: 'blue'}}></View>
                </View>
                <View style={{flex:-1, flexGrow:1, backgroundColor:'green', margin: 1}}>
                    <View style={{width:150, height:100, backgroundColor: 'blue'}}></View>
                </View>
                <View style={{flex:-1, flexGrow:1, backgroundColor:'green', margin: 1}}>
                    <View style={{width:150, height:100, backgroundColor: 'blue'}}></View>
                </View>
                <View style={{flex:-1, flexGrow:1, backgroundColor:'green', margin: 1}}>
                    <View style={{width:150, height:100, backgroundColor: 'blue'}}></View>
                </View>
                <View style={{flex:-1, flexGrow:1, backgroundColor:'green', margin: 1}}>
                    <View style={{width:150, height:100, backgroundColor: 'blue'}}></View>
                </View>   
                             
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 200,
    }
})