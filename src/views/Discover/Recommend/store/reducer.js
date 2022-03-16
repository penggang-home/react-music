import * as actionTypes from './constans'

import { produce } from 'immer'

const initState = {
  topBanners: [],
}

const reducer = (state = initState, action) =>
  produce(state, draft => {
    const { type, topBanners } = action

    switch (type) {
      case actionTypes.CHANGE_TOP_BANNER:
        draft.topBanners = topBanners
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
