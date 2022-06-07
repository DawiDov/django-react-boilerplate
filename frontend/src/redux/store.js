import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import baseReducer from './baseReducer'

const reducers = combineReducers({
  base: baseReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleWare)))

export default store