import * as actionTypes from './constans'

import { getTopBanners } from '@/api/recommend'

const changeTopBannerAction = data => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  topBanners: data,
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log('res: ', res);
      dispatch(changeTopBannerAction(res.banners))
    })
  }
}
