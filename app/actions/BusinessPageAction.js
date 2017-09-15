import * as types from './actionTypes';

import { put } from 'redux-saga/effects'

//所有 actions，将 type 组装为状态对象{type:xxx, ...}
//action 是个返回状态的函数


export function updateIconlist(data) {
    
    return {
        type: types.UPDATAICONLIST,
        data,
    }
}

export function updateFloorList(data) {
    return {
        type: types.updateFloorList,
        data,
    }
}

export function queryIconList(url) {
    return {
        type: types.QUERYICONLIST,
        url,
    }
}

export function queryFloorList(url) {
    return {
        type: types.QUERYFLOORLIST,
        url,
    }
}



