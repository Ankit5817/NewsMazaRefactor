import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './reducer'

export const store = configureStore({
  reducer: {
    news: newsReducer
  },
})

  