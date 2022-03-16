import { combineReducers } from 'redux'

import { reducer as RecommendReducer } from '@/views/Discover/Recommend/store'

const reducers = combineReducers({
  // 轮播图数据
  recommend: RecommendReducer,
})

export default reducers
