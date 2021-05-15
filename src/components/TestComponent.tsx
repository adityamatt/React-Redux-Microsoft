import * as React from 'react'
import { Button, Container } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { testAction } from '../store/actions/testActions'
import { getTestValue } from '../store/selectors/testSelector'

export function TestComponent() {
  const dispatch = useDispatch()
  const buttonClicked = () => {
    dispatch(testAction('UPDATED VALUE'))
  }
  const testValue = useSelector(getTestValue)
  return (
    <div>
      <Container>
        <div>{testValue}</div>
        <Button variant="contained" onClick={buttonClicked}>
          Update Value
        </Button>
      </Container>
    </div>
  )
}
