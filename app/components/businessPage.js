
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


