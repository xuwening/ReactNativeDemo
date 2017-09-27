
import React from 'react'
import {

    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native'

import styles from './styles'
import TitleComponent from './titleComponent'

class GoodItems extends React.Component {
    render() {

        const {busType, text1, text2, text3, imageUrl, itemAction} = this.props

        return (
            <TouchableOpacity onPress={() => itemAction()}>
                <View style={styles.goodsItemsContainer}>
                    <Image style={styles.goodsItems} source={{uri: imageUrl}} />
                    <Text style={styles.goodsText1}  ellipsizeMode='tail' numberOfLines={1}>{text1}</Text>
                    {!text2 ? null : <Text style={styles.goodsText2} ellipsizeMode='tail' numberOfLines={1}>{text2}</Text>}
                    {busType==='4' ? <Text style={styles.goodsText3}>{text3}</Text> : <Text style={styles.goodsText3}>{text3}<Text style={{fontSize: 8}}>起</Text></Text>}
                </View>
            </TouchableOpacity>
        )
    }
}

class ContentComponent extends React.Component {

    returnContent(busType, items, itemAction) {
        if (busType === '1' || busType === '4') {
            const adverlist = items[0].adverList
            return adverlist.map((obj) => {
                return (<GoodItems busType={busType} text1={obj.prodName} text2={obj.prodSubhead} text3={obj.price} imageUrl={obj.pictureUrl} itemAction={itemAction}/>)
            })
        } else {
            const adverlist = items[0].adverList
            return adverlist.map((obj) => {
                return (<GoodItems text1={obj.prodName} text3={obj.price} imageUrl={obj.pictureUrl} itemAction={itemAction}/>)
            })
        }
    }

    render() {
        const {busType, items, navigation} = this.props
        return (
            <View style={styles.content}>
            { this.returnContent(busType, items, itemAction=(url) => {}) }
            </View>
        )
    }
}



class GoodsComponent extends React.Component {

    render() {
        const {busType, titleHead, titleTail, items, navigation} = this.props
        return (
            <View style={styles.container}>
                <TitleComponent busType={busType} text1={titleHead} text2={titleTail} />
                <ContentComponent busType={busType} items={items} navigation={navigation}/>
            </View>
        )
    }
}


module.exports = GoodsComponent 









