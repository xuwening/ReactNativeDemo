
import { call, put, takeEvery, throttle, take, fork, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionTypes'

function fetchPostRequest(url) {
    
    return new Promise((resolve, reject) => {
        fetch(url, {method: 'POST'})
        .then((res) => res.json())
        .then((json) => {
            
            if (json.retCode === '000000') {
                
                resolve(json.rspBody)
            } else {
                console.log('parse json data format error.', json.rspBody.dirList)
                throw new Error('parse json data format error.')
            }
        })
        .catch((reason) => {
            reject(reason)
        })
    })
}


function* iconListGenerator(action) {

    try {
        const res = yield call(fetchPostRequest, action.url)
        const iconList = res.dirList
         console.log('list res:', iconList)
         const icons = []
         iconList[0].iconList.map((obj) => {
             icons.push({
                  iconName: obj.iconName,
                  iconUrl: obj.iconUrl,
                  iconType: obj.iconType,
                  actionUrl: obj.actionUrl,
             })
         })
  
         const putAction = {type: types.UPDATAICONLIST, dirName: iconList[0].dirName, data: icons}
         
         yield put(putAction)
  
      } catch (e) {
      //   yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log('catch error:', e)
     }
}

function* floorListGenerator(action) {
    try {
        const res = yield call(fetchPostRequest, action.url)
        const areaList = res.areaList
  
         const putAction = {type: types.UPDATAFLOORLIST, data: areaList}
         
         yield put(putAction)
  
      } catch (e) {
      //   yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log('catch error:', e)
     }
}

function* fetchUser(action) {

    if (action.type === types.QUERYFLOORLIST) {
        yield fork(floorListGenerator, action)
    }

    if (action.type === types.QUERYICONLIST) {
        yield fork(iconListGenerator, action)
    }
}

function* businessSaga() {

  yield takeEvery([types.QUERYICONLIST, types.QUERYFLOORLIST], fetchUser);
}


export default businessSaga;