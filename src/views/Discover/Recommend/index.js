// 推荐页面
import React, { memo } from 'react'

// left
import Banner from './Banner'
import HotRecommend from './HotRecommend'
import NewAlbum from './NewAlbum'
import RecommendRanking from './RecommendRanking'

// right
import Login from './Login'
import Artist from './Artist'
import PopularAnchor from './PopularAnchor'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'
const Recommend = memo(props => {
  return (
    <RecommendWrapper>
      <Banner />
      <Content className="wrap-v2">
        <RecommendLeft>
          {/* 榜单 */}
          <RecommendRanking />
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟推荐 */}
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight>
          <Login />
          <Artist />
          <PopularAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend
