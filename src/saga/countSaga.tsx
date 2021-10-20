import { put, takeEvery } from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, dicrementAction, incrementAction } from '../store/cashReducer'


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorkr() {
	yield delay(1000)
	yield put(incrementAction())
}

function* decrementWorker() {
	yield delay(1000)
	yield put(dicrementAction())

}

export function* countWatcher() {
	yield takeEvery(ASYNC_INCREMENT, incrementWorkr)
	yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}