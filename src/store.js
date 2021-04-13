import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/productReducers'

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //by having this I can send all information about Redux store to chrome redux devtools and can monitor anything that happens
const store = createStore(combineReducers({
    product: productsReducer,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
)
export default store;