import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
  },
});


const ImageRes = {

	pic1: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1501749651&di=fdaef2a790c445fb9a8ae744ae14f219&src=http://pic3.16pic.com/00/12/61/16pic_1261451_b.jpg',
	pic2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501759779557&di=89a0ffe686968e8c850be4deca17bff5&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140326%2F235113-1403260U22059.jpg',
	pic3: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1501759803499&di=e2ac0195d08201be3045b623cf00a543&imgtype=0&src=http%3A%2F%2Fscimg.jb51.net%2Fallimg%2F150629%2F14-1506291A242927.jpg',
	pic4: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3653132942,1139350242&fm=26&gp=0.jpg',
}

export default class Banner extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {

        return (
            
	        <Swiper style={styles.wrapper} autoplay={true} height={140} >

				  <View style={styles.slide}>
		            <Image style={styles.image} source={{uri: ImageRes.pic1}} />
		          </View>
				  <View style={styles.slide}>
		            <Image style={styles.image} source={{uri: ImageRes.pic2}} />
		          </View>
				  <View style={styles.slide}>
		            <Image style={styles.image} source={{uri: ImageRes.pic3}} />
		          </View>
				  <View style={styles.slide}>
		            <Image style={styles.image} source={{uri: ImageRes.pic4}} />
		          </View>

			  </Swiper>            
        )
    }
}
