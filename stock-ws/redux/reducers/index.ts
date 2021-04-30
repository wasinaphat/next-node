
import { combineReducers } from 'redux'
import registerReducer from './register.reducer'
import loginReducer from './login.reducer'
import stockCreateReducer from './stockCreate.reducer'
import stockEditReducer from './stockEdit.reducer'
import stockListReducer from './stockList.reducer'

export default combineReducers({ registerReducer, loginReducer, stockCreateReducer, stockEditReducer, stockListReducer })