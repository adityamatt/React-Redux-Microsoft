import React, { Component, Fragment } from 'react'
import { DefaultButton } from '@fluentui/react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { Option } from 'react-bootstrap-typeahead/types/types'
import { TypeaheadMenuProps } from 'react-bootstrap-typeahead/types/components/TypeaheadMenu'
import { Text } from '@fluentui/react'
import SinglePerson from './SinglePerson'

interface IHome {
  loggedIn: boolean
}
const SEARCH_URI = 'https://api.github.com/search/users'

export interface IOptions {
  avatar_url: any
  id: any
  login: any
}

export const About = (props: IHome) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [options, setOptions] = React.useState<IOptions[]>([])
  const [selectedOptions, setSelectedOptions] = React.useState<IOptions[]>([])
  const handleSearch = (query: string) => {
    if (!query) {
      setOptions([])
      return
    }
    setIsLoading(true)

    fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
      .then((resp) => resp.json())
      .then(({ items }) => {
        const options = items.map((i: IOptions) => ({
          avatar_url: i.avatar_url,
          id: i.id,
          login: i.login,
        }))

        setOptions(options)
        setIsLoading(false)
      })
  }

  const handleSeachNew = React.useCallback(() => {
    return (query: string) => {
      if (!query) {
        setOptions([])
        return
      }
      setIsLoading(true)

      fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
        .then((resp) => resp.json())
        .then(({ items }) => {
          const options = items.map((i: IOptions) => ({
            avatar_url: i.avatar_url,
            id: i.id,
            login: i.login,
          }))

          setOptions(options)
          setIsLoading(false)
        })
    }
  }, [isLoading, options])
  const filterBy = () => true

  const getProperty = (option: Option, property: string) => {
    return (option as Record<string, any>)[property]
  }

  const onChange = (selected: Option[]) => {
    setSelectedOptions([
      ...selected.map((i: Option) => {
        return {
          avatar_url: getProperty(i, 'avatar_url'),
          id: getProperty(i, 'id'),
          login: getProperty(i, 'login'),
        }
      }),
    ])
    setOptions([])
  }

  const unSelect = (login: string) => {
    setSelectedOptions(
      selectedOptions.filter((i: Option) => {
        return getProperty(i, 'login') !== login
      })
    )
  }

  return (
    <Fragment>
      <p>
        To get started, edit <code>src/components/About/About.tsx</code> and save to reload.
        <AsyncTypeahead
          onInputChange={(text: string) => {
            if (!text) {
              setOptions([])
              return
            }
            console.log('This was executed')
          }}
          delay={5000}
          selected={selectedOptions}
          multiple={true}
          onChange={onChange}
          filterBy={filterBy}
          id="async-example"
          isLoading={isLoading}
          labelKey="login"
          minLength={3}
          onSearch={handleSeachNew()}
          options={options}
          placeholder="Search for a Github user..."
          renderMenuItemChildren={(option, props) => (
            <SinglePerson url={getProperty(option, 'avatar_url')} login={getProperty(option, 'login')} />
          )}
        />
      </p>
      <div>
        <Text>Options : </Text>
        {options.map((option) => (
          <SinglePerson
            url={getProperty(option, 'avatar_url')}
            login={getProperty(option, 'login')}
            key={getProperty(option, 'login')}
          />
        ))}
      </div>
      <hr />
      <div>
        <Text>Selected : </Text>
        {selectedOptions.map((option) => (
          <SinglePerson
            onRemove={unSelect}
            url={getProperty(option, 'avatar_url')}
            login={getProperty(option, 'login')}
            key={getProperty(option, 'login')}
          />
        ))}
      </div>
    </Fragment>
  )
}

export default About
