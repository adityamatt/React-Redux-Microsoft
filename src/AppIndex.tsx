import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { App } from './containers/App'

declare let module: any
const { store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
if (module.hot) {
  module.hot.accept()
}
