import { TEST_ACTION } from '../actions/actionTypes'

export interface ReduxTestState {
  testValue: string
}

const defaultTestState: ReduxTestState = {
  testValue: 'STARTING VALUE',
}

export default function testReducer(state: ReduxTestState = defaultTestState, action: any): ReduxTestState {
  switch (action.type) {
    case TEST_ACTION:
      return {
        testValue: action.payload,
      }
    default:
      return state
  }
}
