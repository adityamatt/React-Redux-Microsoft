import React, { Component } from 'react'
import { DefaultButton } from '@fluentui/react'
import './Header.scss'
import logo from './logo.png'

interface IHeader {
  loggedIn: boolean
  userName: string
  signOut: () => void
}

export const Header = (props: IHeader) => {
  if (!props.loggedIn) {
    return (
      <div className="App-header">
        <div className="ms-font-xl">
          <a href="/">
            <img src={logo} className="logo" alt="My Application" />
          </a>{' '}
          My Application
        </div>
      </div>
    )
  } else
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
            <span className="welcomeSpan">Welcome {props.userName} &nbsp;</span>
            <DefaultButton onClick={props.signOut}>Sign Out</DefaultButton>
          </h4>
        </div>
      </div>
    )
}

export default Header
