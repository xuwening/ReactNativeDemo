
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { connect } from 'react-redux';
import * as counterActions from '../actions/BusinessPageAction';
import {bindActionCreators} from 'redux';

import IconComponent from './IconComponent'
import GoodsComponent from './goodsComponent'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    }
})


class BusinessPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <IconComponent/>
                <GoodsComponent busType="1"  titleHead="套餐商品" titleTail="更多"/>
                <GoodsComponent busType="5"  titleHead="推荐业务" titleTail="更多"/>
                <GoodsComponent busType="4"  titleHead="精选配件" titleTail="更多"/>
            </View>
        )
    }
}


export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(BusinessPage);


