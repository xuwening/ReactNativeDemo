import { call, put, takeEvery, throttle, take, fork, takeLatest } from 'redux-saga/effects'

// import Api from '...'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    console.log('entry fetch user', action)
   try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "INCREMENT"});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* incrementGen(action) {
    console.log('sync increment')
}

function* task1() {
    console.log('entry task1')
    yield takeEvery("INCREMENTASYNC", fetchUser)
}

function* task2() {
    console.log('entry task2')
    yield takeEvery("INCREMENT", incrementGen)
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {

    // yield fork(task2)
    // yield fork(task1)


  yield throttle(5000, ["INCREMENTASYNC"], fetchUser);
    // yield take.maybe("INCREMENTASYNC")

  console.log('end mysaga.............')
    // while (true) {
    //     yield race()
    //     let action = yield take("INCREMENTASYNC")
    //     yield fork(fetchUser, action)
    // }
    // console.log('saga exit........')
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
    
//   yield takeLatest("*", takeLog);
// }

export default mySaga;