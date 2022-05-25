import { Backdrop } from '../scaffold/backdrop'
import { Spinner } from './spinner'


export const Loader = () => {
  return (
    <Backdrop justify="center">
      <Spinner />
    </Backdrop>
  )
}
