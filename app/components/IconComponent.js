
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({

    container: {
        flex: -1,
        backgroundColor: 'white',
    },

    iconListContainer: {
        // flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    iconList: {
        // flex: 1,
        alignItems: 'center',
    },

    iconText: {
        
        fontSize: 8,
        paddingTop: 10,
        paddingBottom: 10,
    },
    
    searchText: {
        color: 'gray',
        fontSize: 9,
        paddingLeft: 10,
        backgroundColor: 'transparent',
    },

    iconButton: {
        width: 30,
        height: 30,
    },

    searchContainer: {
        // flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        
        margin:10,
        borderRadius: 3,
        height: 22,
    },

    searchImage: {
        width: 12,
        height: 12,
        marginRight: 8,
        color: 'gray',
    }
})

class SearchBar extends React.Component {

    render() {

        const {searchAction} = this.props

        return (
            <TouchableOpacity onPress={searchAction}>
                <View style={styles.searchContainer}>
                    <Text style={styles.searchText}>套餐/业务/手机/配件</Text>
                    <Ionicons
                        style={styles.searchImage}
                        name='ios-search'
                        size={13}
                    />
                    
                    
                </View>
            </TouchableOpacity>
    )
    }
}

class IconButton extends React.Component {

    render() {

        const {imageUrl, buttonTitle, buttonAction} = this.props

        return (
            <TouchableOpacity onPress={buttonAction}>
                <View style={styles.iconList}>
                    <Image style={styles.iconButton} source={{uri: imageUrl}}></Image>
                    <Text style={styles.iconText} >{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class IconComponet extends React.Component {
    
    render() {

        return (
            <View style={styles.container}>
                <SearchBar />
                <View style={styles.iconListContainer}>
                    <IconButton imageUrl="https://app.10086.cn/group1/M00/00/63/rBCJYFcDHumAKaC2AAAPcDAVm2M159.png" buttonTitle="我的订单"/>
                    <IconButton imageUrl="https://app.10086.cn/group1/M00/00/63/rBCJYVcDHzWAS0NvAAAP_lVAogg488.png" buttonTitle="收货地址"/>
                    <IconButton imageUrl="https://app.10086.cn/group1/M00/00/63/rBCJYFcDIqiACCPPAAANdhbz80o947.png" buttonTitle="发票管理"/>
                    <IconButton imageUrl="https://app.10086.cn/group2/M00/00/6B/rBCJYlcDIyaAZzq3AAAPEbUdTCM514.png" buttonTitle="我的收藏"/>
                </View>
            </View>
        )
    }
}

module.exports = IconComponet


