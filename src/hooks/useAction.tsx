import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as UserAtionCreators from '../action/user'

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(UserAtionCreators, dispatch)
}