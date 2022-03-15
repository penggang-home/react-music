import * as actionTypes from './constans'

const initState = {
  topBanners: [],
}

function reducer(state = initState, action) {
  const { type, topBanners } = action

  switch (type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return {
        ...state,
        topBanners,
      }
    default:
      return state
  }
}

export default reducer
