import { TEST_ACTION } from './actionTypes'
import { Dispatch } from 'redux'

export const updateTestValue = (payload: any) => ({
  type: TEST_ACTION,
  payload,
})

export const testAction = (updatedValue: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(updateTestValue(updatedValue))
  }
}
