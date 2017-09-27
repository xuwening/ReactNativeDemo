import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import MainApp from './MainApp';

import createSagaMiddleware from 'redux-saga'
// import mySaga from '../sagas/sagas'
import businessSaga from '../sagas/businessPageSaga'

const sagaMiddleware = createSagaMiddleware()


const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
  render() {

    console.log('launch option:', this.props.name, this.props.age)
    return (
          <Provider store={store}>
            <MainApp />
          </Provider>
      )
  }
}

sagaMiddleware.run(businessSaga)


