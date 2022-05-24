import { ChevronLeftTwoTone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { routes } from '../../screens/router'
import { IconBtn } from '../atoms/icon-btn'

function BackBtn() {
  return (
    <IconBtn as={Link} to={routes.main()}>
      <ChevronLeftTwoTone />
    </IconBtn>
  )
}

export default BackBtn
