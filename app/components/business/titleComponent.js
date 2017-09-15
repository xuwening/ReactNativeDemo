

import React from 'react'
import {

    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native'

import styles from './styles'

class TitleComponent extends React.Component {
    
        returnImage(busType) {
            
            let tag
            switch (busType) {
                case '1':
                    tag = <Image style={styles.titleImageHead} source={require('../../assets/businesshome/package.png')}/>
                    break
                case '3':
                    tag = <Image style={styles.titleImageHead} source={require('../../assets/businesshome/phone.png')}/>
                    break
                case '4':
                    tag = <Image style={styles.titleImageHead} source={require('../../assets/businesshome/parts.png')}/>
                    break
                case '5':
                tag = <Image style={styles.titleImageHead} source={require('../../assets/businesshome/business.png')}/>
                break
                default:
                    break
            }
    
            return tag
        }
    
        render() {
    
            const {busType, text1, text2, moreAction} = this.props
            
            return (
                <View style={styles.titleContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    
                        { this.returnImage(busType) }
                        <Text style={styles.titleTextHead}>{text1}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.titleTextTail}>{text2}</Text>
                            <Image style={styles.titleImageTail}  source={require('../../assets/businesshome/more.png')}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }

module.exports = TitleComponent