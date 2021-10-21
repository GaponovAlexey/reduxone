import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchusers } from '../src/action/user';
import { useAction } from '../src/hooks/useAction';
import { useTypeSelector } from '../src/hooks/useTypeSelector';

export const UserList: React.FC = () => {
	const { users, error, loading } = useTypeSelector(store => store.users)

	const { fetchusers } = useAction()


	useEffect(() => {
		fetchusers()
	}, [])
	
	if (loading) {
		return <h1>loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{users.map(user => <div key={user.id} >{user.name}</div>)}
		</div>
	)
}
