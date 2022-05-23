import { createContext, PropsWithChildren, useReducer } from 'react'
import { dialogsDuck, dialogsInitialState } from './dialogs'

interface Ctx {
  dialogs: {
    state: typeof dialogsInitialState
    actions: {
      open: ({ title, content }: Partial<typeof dialogsInitialState>) => void
      close: () => void
    }
  }
}

export const ScaffoldCtx = createContext<Ctx>({
  dialogs: {
    actions: {
      close: function () {
      },
      open: function ({ title, content }: Partial<typeof dialogsInitialState>) {
      }
    },
    state: dialogsInitialState
  }
})

export const ScaffoldCtxProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [dialogs, dispatchDialogs] = useReducer(dialogsDuck.reducer, dialogsInitialState)

  const ctx = {
    dialogs: {
      state: dialogs,
      actions: {
        open: ({ title, content }: Partial<typeof dialogsInitialState>) => dispatchDialogs(
          dialogsDuck.actions.openDialog({ title, content })
        ),
        close: () => dispatchDialogs(dialogsDuck.actions.closeDialog())
      }
    }
  }

  return (
    <ScaffoldCtx.Provider value={ctx}>
      {children}
    </ScaffoldCtx.Provider>
  )
}
