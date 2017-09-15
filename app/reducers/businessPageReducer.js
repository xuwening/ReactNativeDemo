
import * as types from '../actions/actionTypes'

const inititalState = {
    dirName: '',
    iconList: [],
    floorList: [],
}

export default function businessPageReducer(state = inititalState, action) {

    console.log('recv action:', action)

    switch (action.type) {
        case types.UPDATAICONLIST:
            
            return {
                ...state,
                dirName: action.dirName,
                iconList: action.data,
            }
        case types.UPDATAFLOORLIST:
            return {
                ...state,
                floorList : action.data,
            }
        default:
            return state
    }
}