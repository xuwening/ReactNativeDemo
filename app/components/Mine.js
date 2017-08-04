
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native'

import SvgExample from './svgDemo'
import SvgExampleSrc from './svgDemoSrc'

export default class Mine extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <SvgExample svgSize={300}></SvgExample>
                </View>                                
                <View style={{position: 'absolute', left:0, top:0, width:300, height:200}}>
                    <SvgExampleSrc ref="srcView" svgSize={300}></SvgExampleSrc>
                </View>
                <Button title="刷新" onPress={()=>{this.refs["srcView"].refreshSrc()}}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
    },
    item: {
        flex:1,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    }
})

