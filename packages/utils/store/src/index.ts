import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ReducersMapObject } from 'redux'
import { EnhancedStore } from '@reduxjs/toolkit/src/configureStore'

let store: EnhancedStore

interface ICreateStoreProps<T> {
  reducers: ReducersMapObject<T>
}

type TCreateStore = <T>(params: ICreateStoreProps<T>) => EnhancedStore

export const createStore: TCreateStore = (options) => {
  const { reducers = {} } = options

  if (Object.keys(reducers).length === 0) {
    throw new Error('"reducer" is a required argument')
  }

  if (store) {
    return store
  }

  store = configureStore({
    reducer: combineReducers(reducers),
  })

  return store
}

export { store }
