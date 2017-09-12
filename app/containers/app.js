import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import MainApp from './MainApp';

import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas/sagas'
import mySaga1 from '../sagas/sagas1'

const sagaMiddleware = createSagaMiddleware()


const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
  render() {

    return (
          <Provider store={store}>
            <MainApp />
          </Provider>
      )
  }
}

sagaMiddleware.run(mySaga)


