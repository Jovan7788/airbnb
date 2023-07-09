import React, { memo } from 'react'
import Wrapper from "./style"
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name = '' } = props

  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <Wrapper color={name ? "#00848A" : "#000"}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </Wrapper>
  )
})

export default SectionFooter