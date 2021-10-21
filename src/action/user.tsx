import axios from "axios"
import { Dispatch } from "redux"
import { UserActions, UserActionType } from "../types/todo"

export const fetchusers = () => {
	return async (dispatch: Dispatch<UserActions>) => {
		try {
			dispatch({ type: UserActionType.FETCH_USERS })
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			setTimeout(() => {
				dispatch({ type: UserActionType.FETCH_USERS_SUCCES, payload: response.data })
			}, 2000);
		} catch (e) {
			dispatch({ type: UserActionType.FETCH_USERS_ERROR, payload: "моя ошибка" })

		}
	}
}