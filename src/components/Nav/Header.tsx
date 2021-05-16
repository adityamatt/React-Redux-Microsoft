import React, { Component } from 'react'
import { DefaultButton, PrimaryButton, Spinner, SpinnerSize } from '@fluentui/react'
import './Header.scss'
import logo from './logo.png'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { loginRequest } from '../../authConfig'
import { AccountInfo, IPublicClientApplication, SilentRequest } from '@azure/msal-browser'
import { getAccessToken } from '../../services/graphService'

interface IHeader {}

export const Header = (props: IHeader) => {
  const isAuthenticated = useIsAuthenticated()
  const { instance, inProgress, accounts } = useMsal()
  const handleLogin = (instance: IPublicClientApplication) => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e)
    })
  }
  const handleLogout = (instance: IPublicClientApplication) => {
    instance.logout().catch((e) => {
      console.error(e)
    })
  }

  return (
    <div className="App-header">
      <div className="ms-font-xl">
        <a href="/">
          <img src={logo} className="logo" alt="My Application" />
        </a>{' '}
        My Application
      </div>
      <div className="rightFloat">
        <h4 className="welcomeText">
          {inProgress !== 'none' && (
            <div>
              <Spinner size={SpinnerSize.medium} className="spinner" label="Loading" />
            </div>
          )}
          {isAuthenticated && inProgress === 'none' && (
            <div>
              <span className="welcomeSpan">Welcome {accounts[0].username} &nbsp;</span>
              <DefaultButton
                onClick={() => {
                  handleLogout(instance)
                }}
              >
                Sign Out
              </DefaultButton>
            </div>
          )}
          {!isAuthenticated && inProgress === 'none' && (
            <div>
              <DefaultButton
                onClick={() => {
                  handleLogin(instance)
                }}
              >
                Sign In
              </DefaultButton>
            </div>
          )}
        </h4>
      </div>
    </div>
  )
}

export default Header
