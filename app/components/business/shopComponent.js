
import React from 'react'
import {

    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native'

import TitleComponent from './titleComponent'
import styles from './styles'

class ShopItem extends React.Component {

    render() {
        
        const {imgUrl, text1, text2, text3} = this.props

        return (
            <TouchableOpacity style={styles.itemTouchable}>
                <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{uri: imgUrl}}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>{text1}</Text>
                        <Text style={styles.text2}>{text2}</Text>
                        <Text style={styles.text3}>{text3}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}


class ShopComponent extends React.Component {
    
        render() {
    
            const {busType, titleHead, titleTail, items} = this.props

            const adverlist = []
            items.map((obj) => {
                adverlist.push(...obj.adverList)
            })

            return (
                <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
                    <TitleComponent busType={busType} text1={titleHead} text2={titleTail} />
                    <View style={styles.shopContainer}>                
                        {
                            adverlist.map((dic) => {
                                return <ShopItem imgUrl={dic.pictureUrl} text1={dic.prodName} text2={dic.prodSubhead} text3={'￥'+dic.price}/>
                            })
                        }
                    </View>
                </View>
            )
        }
    }

module.exports = ShopComponent