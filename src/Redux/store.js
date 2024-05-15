 import { configureStore } from '@reduxjs/toolkit'
 import cartDataReducer from './counterSlice'
 import { persistStore, persistReducer } from 'redux-persist'
 import storage from 'redux-persist/lib/storage'

 const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartDataReducer)
 export const store = configureStore({
   reducer: {
     toCartData: persistedReducer
   }
 })

 export let persister = persistStore(store)


