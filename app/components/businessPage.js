
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
} from 'react-native'

import { connect } from 'react-redux';
import * as counterActions from '../actions/BusinessPageAction';
import {bindActionCreators} from 'redux';

import IconComponent from './IconComponent'
import {GoodsComponent, ShopComponent} from './goodsComponent'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    }
})


class BusinessPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            loaded: 0,
        }
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {

        const rowData = Array.from(new Array(10))
        .map((val, i) => ({
            text: 'Loaded row ' + (+this.state.loaded + i),
            clicks: 0,
        }))
        .concat(this.state.rowData);

        this.setState({
            loaded: this.state.loaded + 10,
            isRefreshing: false,
            rowData: rowData,
        });
        }, 5000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                ref={(scrollView) => this._scrollView = scrollView}
                
                scrollEventThrottle={100}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />
                }
            >
                    <IconComponent/>
                    <GoodsComponent busType="1"  titleHead="套餐商品" titleTail="更多"/>
                    <GoodsComponent busType="5"  titleHead="推荐业务" titleTail="更多"/>
                    <ShopComponent busType="3" titleHead="热卖专区" titleTail="更多"/>
                    <GoodsComponent busType="4"  titleHead="精选配件" titleTail="更多"/>
            </ScrollView>
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


