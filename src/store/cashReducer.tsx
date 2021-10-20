const initialState = {
  count: 0,
};
export const ADD_ACTION = 'ADD_ACTION'
export const MINUS_ADD = 'MINUS_ADD'
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
export const ASYNC_DECREMENT = 'ASYNC_INCREMENT'

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

export const incrementAction = () => ({ type: ADD_ACTION,  })
export const dicrementAction = () => ({ type: MINUS_ADD,  })
export const asyncIncrementAction = () => ({ type: ASYNC_INCREMENT,  })
export const asyncDicrementAction = () => ({ type: ASYNC_DECREMENT,  })