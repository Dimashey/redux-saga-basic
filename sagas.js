import {all, call, put, takeEvery} from "redux-saga/effects";

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
    console.log('Hello Sagas!');
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* () {
    yield all([helloSaga(), watchIncrementAsync()])
}