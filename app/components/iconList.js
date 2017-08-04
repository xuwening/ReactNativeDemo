import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import IconButton from './IconButton'
import styles from './styles'

const ImageRes = {
	icon1: {
		title: '我的账单',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group2/M00/00/71/rBCJYlcDoP6AKnL6AAAEm2iPrRg271.png',

		type: 1,
		actionUrl: '',
	},

	icon2: {
		title: '套餐余量',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group1/M00/00/66/rBCJYFcDoDeAEF81AAAF6tjhGCE109.png',

		type: 1,
		actionUrl: '',
	},

	icon3: {
		title: '已订购业务',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group1/M00/00/62/rBCJYVcCYJyAVUIbAAAEJQCNidY160.png',

		type: 1,
		actionUrl: '',
	},

	icon4: {
		title: '话费余额',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group1/M00/00/62/rBCJYFcCemuAQ5YMAAAFeVkkwlU314.png',

		type: 1,
		actionUrl: '',
	},

	icon5: {
		title: '详单查询',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group2/M00/00/6A/rBCJYlcCkNWAFCIlAAADvWo0AJA221.png',

		type: 1,
		actionUrl: '',
	},

	icon6: {
		title: '充值缴费',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group2/M00/00/71/rBCJYlcDn92AeD9xAAAIAhYn2gU341.png',

		type: 2,
		actionUrl: 'https://clientdispatch.10086.cn/leadeon-cmcc-static/v2.0/pages/recharge/recharge.html',
	},

	icon7: {
		title: '缴费历史',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group2/M00/00/6A/rBCJYlcCkb6AFlxkAAAGFPhkIFc135.png',

		type: 1,
		actionUrl: '',
	},

	icon8: {
		title: '积分明细',
		iconUrl: 'http://clientdispatch.10086.cn:8080/group1/M00/00/62/rBCJYFcCkgOANED6AAAFxh3dEwQ300.png',

		type: 1,
		actionUrl: '',
	},
}

export default class IconList extends React.Component {

    render() {

        return (
			  <View style={styles.iconList}>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon1}/>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon2}/>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon3}/>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon4}/>

			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon5}/>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon6}/>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon7}/>
			  		<IconButton navigation={this.props.navigation} args={ImageRes.icon8}/>
			  </View>
        )
    }
}
