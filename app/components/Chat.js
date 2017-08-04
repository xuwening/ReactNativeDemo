
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Button
} from 'react-native'

import Animation from 'lottie-react-native';

import LottieAnimatedExample from '../LottieAnimatedExample'

export default class Chat extends React.Component {
    // class ChatOne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }
    render() {
        return (
            <View style={styles.container}>
                <Animation
                    ref={animation => this.animation = animation}
                    style={{
                    width: 200,
                    height: 200,
                    }}
                    source={require('../animations/9squares-AlBoardman.json')}
                    progress={this.state.progress}
                />
                <Button title="播放" onPress={()=>this.animation.play()}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
    item: {
        flex:1,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})

// export default LottieAnimatedExample
