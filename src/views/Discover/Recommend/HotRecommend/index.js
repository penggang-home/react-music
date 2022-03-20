// 热门推荐
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/constants'


// Component
import RecommendHeader from 'components/RecommendHeader'
import SongsCover from 'components/SongsCover'

// redux
import { getHotRecommendAction } from '../store/actions'

// Style
import { HotRecommendWrapper } from './style'

const HotRecommend = memo(() => {
  // state
  const keywords = ['华语', '流行', '摇滚', '民谣', '电子']

  // redux hooks
  const dispatch = useDispatch()
  const hotRecommends = useSelector(state => state.recommend.hotRecommends, shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <RecommendHeader title="热门推荐" keywords={keywords} />
      <div className='recommend-list'>
        {hotRecommends.map(item => {
          return <SongsCover key={item.id} coverInfo={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
