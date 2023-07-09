import React, { memo } from 'react'
import Wrapper from "./style"
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileMenu from '@/assets/svg/icon-menu'
import IconProfileAvatar from '@/assets/svg/icon-avatar'

const right = memo(() => {
    return (
        <Wrapper>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <IconGlobal />
                </span>
            </div>

            <div className='profile'>
                <IconProfileMenu />
                <IconProfileAvatar />
            </div>
        </Wrapper>
    )
})

export default right