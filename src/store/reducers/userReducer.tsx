import { UserActions, UserActionType, userState } from "../../types/todo"

const initialState: userState = {
	users: [],
	loading: false,
	error: null
}

export const userReducer = (state = initialState, action: UserActions): userState => {
	switch (action.type) {
		case UserActionType.FETCH_USERS:
			return { loading: true, error: null, users: [] }
		case UserActionType.FETCH_USERS_SUCCES:
			return { loading: false, error: null, users: action.payload }
		case UserActionType.FETCH_USERS_ERROR:
			return { loading: false, error: action.payload, users: [] }
		default:
			return state
	}
}