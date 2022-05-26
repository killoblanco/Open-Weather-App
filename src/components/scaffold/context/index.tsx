/* eslint-disable @typescript-eslint/no-empty-function,
 no-unused-vars, @typescript-eslint/no-unused-vars */
import {
  createContext, PropsWithChildren, useContext, useMemo, useReducer
} from 'react'
import { dialogsDuck, dialogsInitialState } from './dialogs'

interface Ctx {
  dialogs: {
    state: typeof dialogsInitialState
    actions: {
      open: ({ title, content, props }: Partial<typeof dialogsInitialState>) => void
      close: () => void
    }
  }
}

export const ScaffoldCtx = createContext<Ctx>({
  dialogs: {
    actions: {
      close() {
      },
      open({ title, content, props }: Partial<typeof dialogsInitialState>) {
      }
    },
    state: dialogsInitialState
  }
})

export function ScaffoldCtxProvider({ children }: PropsWithChildren<unknown>) {
  const [dialogs, dispatchDialogs] = useReducer(dialogsDuck.reducer, dialogsInitialState)

  const ctx = useMemo(() => ({
    dialogs: {
      state: dialogs,
      actions: {
        open: ({ title, content, props }: Partial<typeof dialogsInitialState>) => dispatchDialogs(
          dialogsDuck.actions.openDialog({ title, content, props })
        ),
        close: () => dispatchDialogs(dialogsDuck.actions.closeDialog())
      }
    }
  }), [dispatchDialogs, dialogs])

  return (
    <ScaffoldCtx.Provider value={ctx}>
      {children}
    </ScaffoldCtx.Provider>
  )
}

export const useDialogs = () => {
  const { dialogs } = useContext(ScaffoldCtx)
  return dialogs
}
