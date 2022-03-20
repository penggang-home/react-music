import { produce } from 'immer'

import * as actionTypes from './constans'

const initState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: [], // 飙升榜
  NewRanking: [], // 新歌棒
  OriginRanking: [], // 原创棒
}

const reducer = (state = initState, action) =>
  produce(state, draft => {
    const { type } = action

    switch (type) {
      case actionTypes.CHANGE_TOP_BANNER:
        draft.topBanners = action.topBanners
        break
      case actionTypes.CHANGE_HOT_RECOMMENDS:
        draft.hotRecommends = action.hotRecommends
        break
      case actionTypes.CHANGE_NEW_ALBUM:
        draft.newAlbums = action.newAlbums
        break
      case actionTypes.CHANGE_UP_RANKING:
        draft.upRanking = action.upRanking
        break
      case actionTypes.CHANGE_NEW_RANKING:
        draft.NewRanking = action.NewRanking
        break
      case actionTypes.CHANGE_ORIGIN_RANKING:
        draft.OriginRanking = action.OriginRanking
        break
      default:
        return state
    }
  })

// function reducer(state = initState, action) {
//   const { type, topBanners } = action

//   switch (type) {
//     case actionTypes.CHANGE_TOP_BANNER:
//       return { ...state, topBanners }
//     default:
//       return state
//   }
// }

export default reducer
