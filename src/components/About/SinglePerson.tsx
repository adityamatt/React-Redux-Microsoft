import { Persona, IconButton, Stack } from '@fluentui/react'
import React from 'react'
import { IOptions } from './About'

interface ISinglePersonProps {
  login: string
  url: string
  onRemove?: (login: string) => void
}
export default function SinglePerson(props: ISinglePersonProps) {
  return (
    <Stack horizontal verticalAlign="center">
      <Persona onRenderPrimaryText={() => <>{props.login}</>} imageUrl={props.url} />
      {props.onRemove && (
        <IconButton
          iconProps={{ iconName: 'BoxMultiplySolid' }}
          onClick={() => (props.onRemove ? props.onRemove(props.login) : null)}
        />
      )}
    </Stack>
  )
}
