import React, { memo } from 'react'
import Wrapper from "./style"
import PropTypes from 'prop-types'

import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props
    return (
        <Wrapper>
            <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle} />
            <SectionRooms roomList={infoData?.list} itemWidth="25%" />
            <SectionFooter />
        </Wrapper>
    )
})
HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV1