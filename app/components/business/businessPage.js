
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    RefreshControl,
} from 'react-native'

import { connect } from 'react-redux';
import * as businessActions from '../../actions/BusinessPageAction';
import {bindActionCreators} from 'redux';

import IconComponent from './IconComponent'
import GoodsComponent from './goodsComponent'
import ShopComponent from './shopComponent'

import styles from './styles'

class BusinessPage extends React.Component {

    constructor(props) {
        super(props)
        this.isRefreshing = false
        this.state = {
            isRefreshing: false,
            loaded: 0,
        }

        const {actions} = this.props
        console.log('actions: ', actions)
        const url1 = 'https://easy-mock.com/mock/59a8fccd83eb501241b25022/biz-orange/DB/iconList/getIconListForOtherPage'
        const url2 = 'https://easy-mock.com/mock/59a8fccd83eb501241b25022/biz-orange/SHD/mallPageMarketing/getMarketingInfo'
        
        actions.queryIconList(url1)
        actions.queryFloorList(url2)
    }

    _onRefresh() {
        if (this.isRefreshing) {
            return
        }

        this.isRefreshing = true;
        // this.setState({isRefreshing: true});
        // setTimeout(() => {

        // const rowData = Array.from(new Array(10))
        // .map((val, i) => ({
        //     text: 'Loaded row ' + (+this.state.loaded + i),
        //     clicks: 0,
        // }))
        // .concat(this.state.rowData);

        // this.setState({
        //     loaded: this.state.loaded + 10,
        //     isRefreshing: false,
        //     rowData: rowData,
        // });
        // }, 5000);
        // this.componentWillMount()
    }

    componentWillMount() {
        const {actions} = this.props
        console.log('actions: ', actions)
        // const url1 = 'https://easy-mock.com/mock/59a8fccd83eb501241b25022/biz-orange/DB/iconList/getIconListForOtherPage'
        // const url2 = 'https://easy-mock.com/mock/59a8fccd83eb501241b25022/biz-orange/SHD/mallPageMarketing/getMarketingInfo'
        
        // actions.queryIconList(url1)
        // actions.queryFloorList(url2)
    }

    returnFloorList(floorList) {
        const rets = floorList.map((obj) => {
            if (obj.busType === '3') {
                
                return (<ShopComponent busType={obj.busType}  titleHead={obj.areaName} titleTail="更多" items={obj.floorList} navigation={this.props.navigation}/>)
            } else {
                
                return (<GoodsComponent busType={obj.busType}  titleHead={obj.areaName} titleTail="更多" items={obj.floorList} navigation={this.props.navigation}/>)
            }
        })

        return rets
    }

    render() {
        
        const {state, actions} = this.props
        console.log('-----------------start render page')
        return (
            <View style={styles.busPageContainer}>
                <ScrollView
                ref={(scrollView) => this._scrollView = scrollView}
                
                scrollEventThrottle={100}
                refreshControl={
                    <RefreshControl
                        refreshing={this.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />
                }
            >
                    <IconComponent icons={state.iconList} navigation={this.props.navigation}/>
                    {
                        this.returnFloorList(state.floorList)
                    }

            </ScrollView>
            </View>
        )
    }
}


export default connect(state => ({
    state: state.businessPageReducer
  }),
  (dispatch) => ({
    actions: bindActionCreators(businessActions, dispatch)
  })
)(BusinessPage);


