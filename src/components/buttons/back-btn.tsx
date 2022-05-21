import styled from '@emotion/styled'
import { ChevronLeftTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Btn = styled.button(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  padding: theme.spacing(1),
  '& svg': {
    fontSize: theme.spacing(4)
  }
}))

function BackBtn() {
  const navigate = useNavigate()

  return (
    <Btn onClick={() => navigate(-1)}>
      <ChevronLeftTwoTone />
    </Btn>
  )
}

export default BackBtn
