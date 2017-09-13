
import React from 'react'
import {

    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: -1,
        backgroundColor: 'white',
        marginTop: 6,
    },

    content: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 7,
    },

    goodsItemsContainer: {
        flex: -1,
        alignItems: 'center',
        marginTop: 8,
    },

    goodsItems: {
        width: 40,
        height: 40,
    },

    goodsText1: {
        fontSize: 10,
        margin: 2,
    },

    goodsText2: {
        fontSize: 8,
        color: 'gray',
        margin: 2,
    },

    goodsText3: {
        fontSize: 10,
        color: 'red',
        margin: 2,
    },

    titleContainer: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 8,
    },

    titleImageHead: {
        width: 12,
        height: 12,
    },

    titleImageTail: {
        width: 12,
        height: 12,
    },

    titleTextHead: {
        fontSize: 10,
        marginLeft: 5,
    },

    titleTextTail: {
        fontSize: 8,
        color: 'gray',
    },
})

class GoodItems extends React.Component {
    render() {

        const {text1, text2, text3, imageUrl, itemAction} = this.props

        return (
            <TouchableOpacity onPress={itemAction}>
                <View style={styles.goodsItemsContainer}>
                    <Image style={styles.goodsItems} source={{uri: imageUrl}} />
                    <Text style={styles.goodsText1}>{text1}</Text>
                    {!text2 ? null : <Text style={styles.goodsText2}>{text2}</Text>}
                    <Text style={styles.goodsText3}>{text3}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class TitleComponent extends React.Component {

    returnImage(busType) {
        
        let tag
        switch (busType) {
            case '1':
                tag = <Image style={styles.titleImageHead} source={require('../assets/businesshome/package.png')}/>
                break
            case '3':
                tag = <Image style={styles.titleImageHead} source={require('../assets/businesshome/phone.png')}/>
                break
            case '4':
                tag = <Image style={styles.titleImageHead} source={require('../assets/businesshome/parts.png')}/>
                break
            case '5':
            tag = <Image style={styles.titleImageHead} source={require('../assets/businesshome/business.png')}/>
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
                        <Image style={styles.titleImageTail}  source={require('../assets/businesshome/more.png')}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class ContentComponent extends React.Component {

    returnContent(busType) {
        if (busType === '1' || busType === '4') {
            return [
            <GoodItems text1="4G飞享套餐" text2="电话多？上网" text3="￥18元/月起" imageUrl="https://app.10086.cn/group2/M00/00/CE/rBCJYldNn6iAZQTVAABYT6Ecz2E710.png"/>,
            <GoodItems text1="4G飞享套餐" text2="电话多？上网" text3="￥18元/月起" imageUrl="https://app.10086.cn/group2/M00/00/CE/rBCJYldNn6iAZQTVAABYT6Ecz2E710.png"/>,
            <GoodItems text1="4G飞享套餐" text2="电话多？上网" text3="￥18元/月起" imageUrl="https://app.10086.cn/group2/M00/00/CE/rBCJYldNn6iAZQTVAABYT6Ecz2E710.png"/>,
        ]
        } else {
            return [
            <GoodItems text1="4G飞享套餐" text3="￥18元/月起" imageUrl="https://app.10086.cn/group2/M00/00/CE/rBCJYldNn6iAZQTVAABYT6Ecz2E710.png"/>,
            <GoodItems text1="4G飞享套餐" text3="￥18元/月起" imageUrl="https://app.10086.cn/group2/M00/00/CE/rBCJYldNn6iAZQTVAABYT6Ecz2E710.png"/>,
            <GoodItems text1="4G飞享套餐" text3="￥18元/月起" imageUrl="https://app.10086.cn/group2/M00/00/CE/rBCJYldNn6iAZQTVAABYT6Ecz2E710.png"/>,
        ]
        }
    }

    render() {
        const {busType} = this.props
        return (
            <View style={styles.content}>
            { this.returnContent(busType) }
            </View>
        )
    }
}

class GoodsComponent extends React.Component {

    render() {
        const {busType, titleHead, titleTail} = this.props
        return (
            <View style={styles.container}>
                <TitleComponent busType={busType} text1={titleHead} text2={titleTail} />
                <ContentComponent busType={busType}/>
            </View>
        )
    }
}


module.exports = GoodsComponent









