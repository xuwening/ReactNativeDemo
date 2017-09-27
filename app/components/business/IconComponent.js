
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

        const {imageUrl, buttonTitle, actionUrl} = this.props
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('secondPage', { actionUrl: actionUrl })}>
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

        const {icons} = this.props

        return (
            <View style={styles.container}>
                <SearchBar navigation={this.props.navigation}/>
                <View style={styles.iconListContainer}>
                {
                    icons.map((icon) => {
                        return(<IconButton imageUrl={icon.iconUrl} buttonTitle={icon.iconName} actionUrl={icon.actionUrl} navigation={this.props.navigation}/>)
                    })
                }

                </View>
            </View>
        )
    }
}

module.exports = IconComponet


