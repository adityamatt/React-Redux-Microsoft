import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { PublicClientApplication } from '@azure/msal-browser'
import { msalConfig } from './authConfig'
import { MsalProvider } from '@azure/msal-react'
import './styles/styles.scss'
import './styles/example.css'
import './styles/prism.css'
import './styles/bootstrap.min.css'

declare let module: any
const { store } = configureStore()

const msalInstance = new PublicClientApplication(msalConfig)

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <BrowserRouter>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          ></link>
          <App />
        </BrowserRouter>
      </Provider>
    </MsalProvider>
  </React.StrictMode>,

  document.getElementById('root')
)
if (module.hot) {
  module.hot.accept()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
