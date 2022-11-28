import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: 1,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    testAction: (state) => ({...state, test: 2}),
  },
})

export const { testAction } = uiSlice.actions

export default uiSlice.reducer