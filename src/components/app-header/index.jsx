import React, { memo } from 'react'
import Wrapper from "./style"
import HeaderLeft from "./c-cpns/header-left"
import HeaderCenter from "./c-cpns/header-center"
import HeaderRight from "./c-cpns/header-right"

const AppHeader = memo(() => {
  return (
    <Wrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </Wrapper>
  )
})

export default AppHeader