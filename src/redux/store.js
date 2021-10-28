import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//import reducers
import currencyReducer from './reducers/currencies.reducer'
import {
  productsByCategoryReducer,
  productsReducer,
} from './reducers/products.reducer'

const rootReducer = combineReducers({
  currency: currencyReducer,
  products: productsReducer,
  productsByCategory: productsByCategoryReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
