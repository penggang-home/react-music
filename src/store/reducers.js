import { combineReducers } from 'redux'

import { reducer as RecommendReducer } from '@/views/Discover/Recommend/store'
import { reducer as PlayerReducer } from '@/views/Player/store'

const reducers = combineReducers({
  // 轮播图数据
  recommend: RecommendReducer,
  // 播放相关数据
  player: PlayerReducer,
})

export default reducers
