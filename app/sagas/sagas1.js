import { call, put, takeEvery, take, fork, takeLatest } from 'redux-saga/effects'
// import Api from '...'

function* takeLog(action) {
    console.log('log module: ', action)
    if (action.type === 'INCREMENTASYNC') {
        yield put({type: "INCREMENT"});
    }
}


function* mySaga1() {
    
  yield takeLatest("*", takeLog);
}

export default mySaga1;