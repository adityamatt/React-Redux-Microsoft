import React, { Component, Fragment } from 'react'
import { DefaultButton } from '@fluentui/react'

interface IHome {}

export const Footer = (props: IHome) => {
  return (
    <Fragment>
      <p>&copy; Author adtiwar@microsoft.com | aditya.tiwarics@gmail.com </p>
    </Fragment>
  )
}

export default Footer
