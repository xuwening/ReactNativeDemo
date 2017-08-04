import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

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


export default class Counter extends Component {

    static num = 2;


  render() {
      //所有关于界面事件的操作，都应放在其他 js 文件
    const { counter, text, increment, decrement, incrementNum, onTextInput} = this.props;

    return (
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{text}</Text>

        <Text>{counter}</Text>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(str) => onTextInput(str)}
                     placeholder={'input text'}/>

        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>

        {/*自定义两个操作*/}
        <TouchableOpacity onPress={() => incrementNum(Counter.num)} style={styles.button}>
          <Text>up2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => incrementNum(-Counter.num)} style={styles.button}>
          <Text>down2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
