import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/rootReducer'
import { Middleware } from 'redux'

const middlewares: Middleware[] = [thunk]

export default () => {
  const store = createStore(reducers, applyMiddleware(...middlewares))
  return { store }
}
