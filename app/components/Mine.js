
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    NativeModules,
} from 'react-native'

import SvgExample from './svgDemo'
import SvgExampleSrc from './svgDemoSrc'

// var openBus = NativeModules.LDOpenBus
// var rsalib = NativeModules.RSALibraryInterface

export default class Mine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            originStr: 'encriptStr: abadsfsd',
            contentText: 'result: ',
        }
    }

    async refreshAction() {
        // var result = await openBus.openNativePage("101010", {a:1, b: 'bbb'})
        // console.log(result)
    }

    encryptString() {
        // rsalib.encrypt(this.state.originStr, (error, result) => {
        //     if (error) {

        //     } else {
        //         console.log('rsa encrypt string:', result)
        //         this.setState({contentText: "result: " + result})
        //     }
        // })
    } 

    textChangeAction(text) {
        this.setState({originStr: text})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <SvgExample svgSize={300}></SvgExample>
                </View>                                
                <View style={{position: 'absolute', left:0, top:0, width:300, height:200}}>
                    <SvgExampleSrc ref="srcView" svgSize={300}></SvgExampleSrc>
                </View>
                <TextInput onChangeText={(text)=>this.textChangeAction(text)} value={this.state.originStr} style={{borderColor: 'red', borderWidth: 1}}></TextInput>
                <Text ref="contentText">{this.state.contentText}</Text>
                <Button title="打开native页面" onPress={()=>{this.refreshAction()}}></Button>
                <Button title="加密" onPress={()=>{this.encryptString()}}></Button>
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

