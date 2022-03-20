// 推荐榜单
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RecommendHeader from 'components/RecommendHeader'
import TopRanking from 'components/TopRanking'

import { getTopListAction } from '../store/actions'

import { RankingWrapper } from './style'

const RecommendRanking = memo(() => {
  // redux hooks
  const dispatch = useDispatch()
  const { upRanking, NewRanking, OriginRanking } = useSelector(state => ({
    upRanking: state.recommend.upRanking,
    NewRanking: state.recommend.NewRanking,
    OriginRanking: state.recommend.OriginRanking,
  }))
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  // hooks

  return (
    <RankingWrapper>
      <RecommendHeader title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={NewRanking} />
        <TopRanking info={OriginRanking} />
      </div>
    </RankingWrapper>
  )
})

export default RecommendRanking
