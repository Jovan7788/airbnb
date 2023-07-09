import React, { memo } from 'react'
import Wrapper from "./style"
import IconSearchBar from '@/assets/svg/icon-search-bar'


const center = memo(() => {
    return (
        <Wrapper>
            <div className='search-bar'>
                <div className='text'>搜索房源和体验</div>
                <span className='icon'>
                    <IconSearchBar />
                </span>
            </div>
        </Wrapper>
    )
})

export default center