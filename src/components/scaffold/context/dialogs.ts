import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const dialogsInitialState = {
  open: false,
  title: '',
  content: ''
}

export const dialogsDuck = createSlice({
  name: 'dialogs',
  initialState: dialogsInitialState,
  reducers: {
    openDialog: (state, action: PayloadAction<Partial<typeof dialogsInitialState>>) => {
      state.open = true
      state.title = action.payload.title!
      state.content = action.payload.content!
    },
    closeDialog: () => dialogsInitialState
  }
})
