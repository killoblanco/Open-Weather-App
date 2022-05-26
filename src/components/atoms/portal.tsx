import { PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Backdrop from '../scaffold/backdrop'

const Portal = ({ children }: PropsWithChildren<unknown>) => {
  const portalContainer = document.getElementById('backdrop') as HTMLElement
  const el = document.createElement('div')

  useEffect(() => {
    portalContainer.appendChild(el)
    return () => {
      portalContainer.removeChild(el)
    }
  }, [])

  return createPortal(
    (
      <Backdrop>
        {children}
      </Backdrop>
    ), el
  )
}

export default Portal
