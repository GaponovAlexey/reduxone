const initialState = {
  count: 0,
};

export const cashReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_ACTION":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "M_ACTION":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
