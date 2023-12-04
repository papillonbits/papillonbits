import configureStore from 'redux-mock-store'
import { thunk } from 'redux-thunk'

export function getAppMockStore(customAppState) {
  return configureStore([thunk])(customAppState)
}
