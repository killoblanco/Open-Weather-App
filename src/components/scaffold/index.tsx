import { PropsWithChildren } from 'react'

function Scaffold({children}:PropsWithChildren<unknown>) {
  return (
    <div>
      {children}
    </div>
  )
}

export default Scaffold
