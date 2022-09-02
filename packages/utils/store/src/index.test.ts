import { store, createStore } from './'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { jest } from '@jest/globals'
import { Reducer } from '@reduxjs/toolkit'

jest.mock('@reduxjs/toolkit')

export interface IMockStoreState {
  app: any,
}

const app = {} as Reducer<any>

const callCreateStore = (reducers: any) => {
  return createStore<IMockStoreState>({
    reducers
  })
}

describe('store', () => {
  const mockConfigureStore = configureStore as jest.Mock
  const mockCombineReducers = combineReducers as jest.Mock

  mockConfigureStore.mockReturnValue({})
  mockCombineReducers.mockReturnValue({})

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it ('store should return undefined if we did not call createStore', () => {
    expect(store).toBeUndefined()
  })

  it ('it should throw error if reducers are empty', () => {
    expect(callCreateStore).toThrowError('"reducer" is a required argument')
  })

  it ('it should call methods "configureStore" and "combineReducers" only once and return configured store', () => {
    callCreateStore({ app })

    expect(mockConfigureStore).toHaveBeenCalledTimes(1)
    expect(mockCombineReducers).toHaveBeenCalledTimes(1)

    callCreateStore({ app })

    expect(mockConfigureStore).toHaveBeenCalledTimes(1)
    expect(mockCombineReducers).toHaveBeenCalledTimes(1)

    expect(store).not.toBeUndefined()
  })
})
