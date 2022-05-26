import Backdrop from '../scaffold/backdrop'
import Spinner from './spinner'

function Loader() {
  return (
    <Backdrop justify="center">
      <Spinner />
    </Backdrop>
  )
}

export default Loader
