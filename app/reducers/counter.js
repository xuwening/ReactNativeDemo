import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
    text: 'dispaly text',
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.OTHERMENT:
        return {
            ...state,
            count: state.count + action.num
        }
      case types.TEXTINPUT:
          return {
              ...state,
              text: action.text
          }
    default:
      return state;
  }
}
