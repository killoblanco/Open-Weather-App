import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const dialogsInitialState = {
  open: false,
  title: '',
  content: '',
  // eslint-disable-next-line no-unused-vars
  props: {} as { onClick?: (d: any) => void }
}

export const dialogsDuck = createSlice({
  name: 'dialogs',
  initialState: dialogsInitialState,
  reducers: {
    openDialog: (state, { payload }: PayloadAction<Partial<typeof dialogsInitialState>>) => ({
      ...state,
      open: true,
      title: payload.title || '',
      content: payload.content || '',
      props: payload.props || {}
    }),
    closeDialog: () => dialogsInitialState
  }
})
