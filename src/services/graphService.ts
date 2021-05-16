// import { useIsAuthenticated, useMsal } from '@azure/msal-react'

import { AccountInfo, SilentRequest } from '@azure/msal-browser'
import { useMsal } from '@azure/msal-react'
import { loginRequest } from '../authConfig'

// const { instance } = useMsal()

// const getAccessToken = async () => {
// instance.acquireTokenSilent()
// }

export const getAccessToken = async () => {
  const { instance } = useMsal()
  const accessTokenBody = await instance.acquireTokenSilent(loginRequest)
  const accessToken = accessTokenBody.accessToken
  return accessToken
}
