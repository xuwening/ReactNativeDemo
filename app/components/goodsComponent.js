
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


const shopStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemContainer: {
        flex: -1,
        flexDirection: 'row',
        borderColor: 'gray',
        margin: 8,
        flexGrow: 1,
    },

    image: {
        width: 32,
        height: 56,
    },

    textContainer: {
        justifyContent: 'space-between',
        marginLeft: 8,
    },

    text1: {
        flex:1,
        fontSize: 10,
    },

    text2: {
        flex:2,
        color: 'gray',
        fontSize: 8,
    },

    text3: {
        flex:1,
        color: 'red',
        fontSize: 10,
    },
})

class ShopItem extends React.Component {

    render() {
        
        const {imgUrl, text1, text2, text3} = this.props

        return (
            
                <View style={shopStyles.itemContainer}>
                    <Image style={shopStyles.image} source={{uri: imgUrl}}/>
                    <View style={shopStyles.textContainer}>
                        <Text style={shopStyles.text1}>{text1}</Text>
                        <Text style={shopStyles.text2}>{text2}</Text>
                        <Text style={shopStyles.text3}>{text3}</Text>
                    </View>
                </View>
            
        )
    }
}

class ShopComponent extends React.Component {

    render() {

        const {busType, titleHead, titleTail} = this.props

        const items = [
            {
                imgUrl: 'https://app.10086.cn/group2/M00/02/BD/rBCJYlmtEO-ABwmWAAAUGPgcExI626.jpg',
                text1: '红米Note4X 64G',
                text2: 'Kindle X 咪咕电子书阅读器',
                text3: '￥1079',
            },
            {
                imgUrl: 'https://app.10086.cn/group2/M00/02/BD/rBCJYlmtEO-ABwmWAAAUGPgcExI626.jpg',
                text1: '红米Note4X 64G',
                text2: '徕卡双摄像头 麒麟960芯片',
                text3: '￥1079',
            },
            {
                imgUrl: 'https://app.10086.cn/group2/M00/02/BD/rBCJYlmtEO-ABwmWAAAUGPgcExI626.jpg',
                text1: '红米Note4X 64G',
                text2: '金属机身 十核处理器',
                text3: '￥1079',
            },
            {
                imgUrl: 'https://app.10086.cn/group2/M00/02/BD/rBCJYlmtEO-ABwmWAAAUGPgcExI626.jpg',
                text1: '红米Note4X 64G',
                text2: '金属机身 十核处理器',
                text3: '￥1079',
            },
            {
                imgUrl: 'https://app.10086.cn/group2/M00/02/BD/rBCJYlmtEO-ABwmWAAAUGPgcExI626.jpg',
                text1: '红米Note4X 64G',
                text2: '金属机身 十核处理器',
                text3: '￥1079',
            },
            {
                imgUrl: 'https://app.10086.cn/group2/M00/02/BD/rBCJYlmtEO-ABwmWAAAUGPgcExI626.jpg',
                text1: '红米Note4X 64G',
                text2: '金属机身 十核处理器',
                text3: '￥1079',
            },
        ]

        return (
            <View style={{flex: 1, backgroundColor: 'white', marginTop: 6}}>
                <TitleComponent busType={busType} text1={titleHead} text2={titleTail} />
                <View style={shopStyles.container}>                
                    {
                        items.map((dic) => {
                            return <ShopItem imgUrl={dic['imgUrl']} text1={dic['text1']} text2={dic['text2']} text3={dic['text3']}/>
                        })
                    }
                </View>
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


module.exports = {
    GoodsComponent,
    ShopComponent
}









