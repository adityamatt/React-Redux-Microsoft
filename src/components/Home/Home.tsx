import React, { Component, Fragment } from 'react'
import { DefaultButton } from '@fluentui/react'

interface IHome {}

export const Home = (props: IHome) => {
  const allLinks: string[] = ['https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css']
  return (
    <Fragment>
      <p>
        {allLinks.map((link) => (
          <link
            key={link}
            rel="stylesheet"
            href={link}
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
        ))}
        To get started, edit <code>src/components/Home/Home.tsx</code> and save to reload.
      </p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>
    </Fragment>
  )
}

export default Home
