const initialState = {
  count: 0,
};
const ADD_ACTION = 'ADD_ACTION'
const MINUS_ADD = 'MINUS_ADD'

export const cashReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        count: state.count + 1,
      };
    case MINUS_ADD:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const incrementAction = (payload: any) => ({ type: MINUS_ADD, payload })
export const dicrementAction = (payload: any) => ({ type: MINUS_ADD, payload })