import React, { Component, Fragment } from 'react'
import { DefaultButton } from '@fluentui/react'

interface IHome {
  loggedIn: boolean
}

export const About = (props: IHome) => {
  return (
    <Fragment>
      <p>
        To get started, edit <code>src/components/About/About.tsx</code> and save to reload.
      </p>
    </Fragment>
  )
}

export default About
