import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from "../reducers"

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: []
}


const pReducer = persistReducer(persistConfig, reducers)



const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store