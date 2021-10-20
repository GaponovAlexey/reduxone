
const initialState = {
  customers: []
};

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_ADD = "REMOVE_ADD"
const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"

export const castomerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMER:
      return { ...state, customers: [...state.customers, ...action.payload] }
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case REMOVE_ADD:
      return {
        ...state,
        customers: state.customers.filter(e => e.id !== action.payload)
      };
    default:
      return state;
  }
};

export const addCustomoerAction = (payload) => ({ type: ADD_CUSTOMER, payload })
export const removeCusomerAction = (payload) => ({ type: REMOVE_ADD, payload })
export const addManyCustomersAction = (payload) => ({ type: ADD_MANY_CUSTOMER, payload })