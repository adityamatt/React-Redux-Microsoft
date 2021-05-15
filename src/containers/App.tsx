import * as React from 'react'
import './App.css'
import { NavBar } from '../components/Nav/NavBar'
import { Route, HashRouter, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@fluentui/react'
import Header from '../components/Nav/Header'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

export const App = (props: any) => {
  return (
    <HashRouter>
      <ThemeProvider>
        <div className="App">
          <div className="header">
            <Header
              userName="Mock Name"
              loggedIn={true}
              signOut={() => {
                //do nothing
              }}
            />
          </div>
          <div className="body">
            <div className="content">
              <Route key="homeKey" exact path="/">
                <Home />
              </Route>
              <Route key="aboutKey" exact path="/about">
                <About loggedIn={true} />
              </Route>
            </div>
            <div className="sidebar">
              <NavBar />
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
