export enum UserActionType {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}


export interface userState {
	users: any
	loading: boolean
	error: null | string

}

interface UserAction {
	type: string
	loading: false
	error: null
}



interface FetchUserAction {
	type: UserActionType.FETCH_USERS
}
interface FetchUserSuccessAction {
	type: UserActionType.FETCH_USERS_SUCCES,
	payload: any
}
interface FetchUserEROORAction {
	type: UserActionType.FETCH_USERS_ERROR,
	payload: string
}

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserEROORAction
