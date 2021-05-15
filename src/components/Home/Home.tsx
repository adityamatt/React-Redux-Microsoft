import React, { Component, Fragment } from 'react'
import { DefaultButton } from '@fluentui/react'

interface IHome {}

export const Home = (props: IHome) => {
  return (
    <Fragment>
      <p>
        To get started, edit <code>src/components/Home/Home.tsx</code> and save to reload.
      </p>
    </Fragment>
  )
}

export default Home
