import React, { memo } from 'react'
import Wrapper from "./style"
import IconLogo from '@/assets/svg/icon-logo'

const left = memo(() => {
    return (
        <Wrapper>
            <IconLogo />
        </Wrapper>
    )
})

export default left