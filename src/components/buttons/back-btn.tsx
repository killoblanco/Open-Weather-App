import { ChevronLeftTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { IconBtn } from '../atoms/icon-btn'

function BackBtn() {
  const navigate = useNavigate()

  return (
    <IconBtn onClick={() => navigate(-1)}>
      <ChevronLeftTwoTone />
    </IconBtn>
  )
}

export default BackBtn
