import React, { Component, Fragment } from 'react'
import { DefaultButton } from '@fluentui/react'

interface IHome {}

export const Footer = (props: IHome) => {
  return (
    <Fragment>
      <p>&copy; highfive.in@gmail.com </p>
    </Fragment>
  )
}

export default Footer
