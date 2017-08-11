import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

import { connect } from 'react-redux';
import * as counterActions from '../actions/counterActions';
import {bindActionCreators} from 'redux';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});


// export default 
class Counter extends Component {

    static num = 2;


  render() {
      //所有关于界面事件的操作，都应放在其他 js 文件
    // const { counter, text, increment, decrement, incrementNum, onTextInput} = this.props;

    const {state, actions } = this.props;

    return (
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>{state.count}</Text>

        <TouchableOpacity onPress={actions.increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={actions.decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Counter);