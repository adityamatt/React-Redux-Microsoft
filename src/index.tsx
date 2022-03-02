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
import { JupiterProvider } from '@jup-ag/react-hook'
import { Connection } from '@solana/web3.js'

declare let module: any
const { store } = configureStore()

const connection = new Connection('https://solana-api.projectserum.com')
const msalInstance = new PublicClientApplication(msalConfig)

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <BrowserRouter>
          <JupiterProvider connection={connection} cluster={'mainnet-beta'}>
            <App />
          </JupiterProvider>
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
