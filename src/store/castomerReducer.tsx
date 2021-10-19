
const initialState = {
  customers: []
};

export const castomerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case "GET_CUSTOMER":
      return {
        ...state,
        customers: [...state.customers, !action.payload],
      };
    default:
      return state;
  }
};
