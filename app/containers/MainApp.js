'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

import { addNavigationHelpers } from 'react-navigation';

import StacksOverTabs from '../components/StacksOverTabs'


// @connect(state => ({
//   state: state.counter
// }))
export default class MainApp extends Component {


  render() {
    // const {homeReducer, dispatch } = this.props;
    return (

      <StacksOverTabs
        // navigation={addNavigationHelpers({dispatch:this.props.dispatch, state: this.props.homeReducer })}
      />
    );
  }
}


// export default connect(state => ({
//     homeReducer: state.homeReducer
//   })
// )(MainApp);