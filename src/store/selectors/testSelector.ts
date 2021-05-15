import { createSelector } from 'reselect'
import { ReduxTestState } from '../reducers/testReducer'

const testState = (state: any): ReduxTestState => state.test

export const getTestValue = createSelector(testState, (testState: ReduxTestState) => {
  return testState.testValue
})
