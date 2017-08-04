import * as types from '../actions/actionTypes';

const initialState = {
	pic1: 'http://clientdispatch.10086.cn:8080/group1/M00/00/89/rBCJYFc4z5KAQNoVAADNJiv-Evs291.jpg',
	pic2: 'http://clientdispatch.10086.cn:8080/group2/M00/00/B6/rBCJYlc1h1qAJ49fAAD9sV_PWEI736.jpg',
	pic3: 'http://clientdispatch.10086.cn:8080/group1/M00/00/79/rBCJYFcV-veASvCrAAEpvXolWQ0014.jpg',
	pic4: 'http://clientdispatch.10086.cn:8080/group1/M00/00/89/rBCJYFc4z5KAQNoVAADNJiv-Evs291.jpg',
};

export default function homeReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.UPDATEPICS:
            return {
                ...state,
                ...action.pics
            };
        default:
            return state;
    }
}