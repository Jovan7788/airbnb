import React, { memo } from 'react'
import Wrapper from "./style"

const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <Wrapper>
      <h2 className='title'>{title}</h2>
      {subtitle && <div className='subtitle'>{subtitle}</div>}
    </Wrapper>
  )
})


export default SectionHeader