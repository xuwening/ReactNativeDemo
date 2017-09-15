
import {
        Dimensions,
        StyleSheet,
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
        maxWidth: 64,
    },

    goodsText2: {
        fontSize: 8,
        color: 'gray',
        margin: 2,
        maxWidth: 60,
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

    //shopComponent
    shopContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemTouchable: {
        flex: -1, 
        flexDirection: 'row', 
        flexGrow: 1, 
        borderColor: 'gray',
        borderTopWidth: 0.5, 
        borderRightWidth: 1, 
        marginRight: -1, 
        width: Dimensions.get('window').width/2,
    },

    itemContainer: {
        flex: -1,
        flexDirection: 'row',
        margin: 8,
        // flexGrow: 1,
    },

    image: {
        width: 44,
        height: 77,
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
        maxWidth: 68,
    },

    text3: {
        flex:1,
        color: 'red',
        fontSize: 10,
    },

    //businessPage
    busPageContainer: {
        flex: 1,
        backgroundColor: 'lightgray',
    }
})


module.exports = styles