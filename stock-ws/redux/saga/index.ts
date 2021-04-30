import { takeEvery, all } from 'redux-saga/effects'
import { sagaRegister } from './register.saga'
import { sagaLogin, sagaReLogin, sagaLogout } from './login.saga'
import { sagaStockList } from './stockList.saga';
import { sagaStockCreate } from './stockCreate.saga';
import { sagaStockDelete } from './stockDelete.saga';
import { sagaStockEdit } from './stockEdit.saga';
import * as actionTypes from './actionTypes'

// Register
export function* watchRegisterRequest() {
    yield takeEvery(actionTypes.REGISTER_REQUEST, sagaRegister)
}
export function* watchLoginRequest() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, sagaLogin)
}
export function* watchReLoginRequest() {
    yield takeEvery(actionTypes.RELOGIN_REQUEST, sagaReLogin)
}
export function* watchLogoutRequest() {
    yield takeEvery(actionTypes.LOGOUT_REQUEST, sagaLogout)
}

export function* watchStockListRequest() {
    yield takeEvery(actionTypes.STOCK_LIST_REQUEST, sagaStockList)
}

// StockCreate
export function* watchStockCreateRequest() {
    yield takeEvery(actionTypes.STOCK_CREATE_REQUEST, sagaStockCreate)
}

// StockEdit
export function* watchStockEditRequest() {
    yield takeEvery(actionTypes.STOCK_EDIT_REQUEST, sagaStockEdit)
}
export function* watchStockDeleteRequest() {
    yield takeEvery(actionTypes.STOCK_DELETE_REQUEST, sagaStockDelete)
}
export default function* rootSaga() {
    yield all([
        watchRegisterRequest(),
        watchLoginRequest(),
        watchReLoginRequest(),
        watchLogoutRequest(),
        watchStockListRequest(),
        watchStockCreateRequest(),
        watchStockEditRequest(),
        watchStockDeleteRequest()
    ])
}