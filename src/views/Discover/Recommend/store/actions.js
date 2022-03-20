import * as actionTypes from './constans'

import { getTopBanners, getHotRecommends, getNewAlbums, getTopList } from '@/api/recommend'

// Banner 数据
const changeTopBannerAction = data => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: data,
})
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      // console.log('res: ', res)
      dispatch(changeTopBannerAction(res.banners))
    })
  }
}

// 热门歌单
const changeHotRecommendAction = data => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: data,
})
export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      // console.log('res: ', res)
      dispatch(changeHotRecommendAction(res.result))
    })
  }
}

// 新碟上架
const changeNewAlbumAction = data => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: data,
})
export const getNewAlbumAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // console.log('res: ', res)
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
}

const changeUpRankingAction = data => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: data,
})
const changeNewRankingAction = data => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  NewRanking: data,
})
const changeOriginRankingAction = data => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  OriginRanking: data,
})
// 榜单
export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 3:
          dispatch(changeUpRankingAction(res.playlist))
          break
        case 0:
          dispatch(changeNewRankingAction(res.playlist))
          break
        case 2:
          dispatch(changeOriginRankingAction(res.playlist))
          break
        default:
          break
      }
    })
  }
}
