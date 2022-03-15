import { combineReducers } from 'redux'

import { reducer as RecommendReducer } from '@/views/Discover/ChildComponents/Recommend/store'

const reducers = combineReducers({
  recommend: RecommendReducer,
})

export default reducers
