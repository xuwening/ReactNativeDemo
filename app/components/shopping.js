'use strict'

import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button,
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
            <View style={styles.container} ref='containerView'>
                { lists.map((value) => <Text>Shopping tab {value}</Text>)  }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        
    }
})