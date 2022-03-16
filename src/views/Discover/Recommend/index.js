// 推荐页面
import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import Banner from './Banner'

const Recommend = memo(props => {
  return (
    <RecommendWrapper>
      <Banner />
    </RecommendWrapper>
  )
})

export default Recommend
