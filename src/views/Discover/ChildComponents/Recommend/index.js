// 推荐页面
import React, { memo, useEffect } from 'react'

import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actions'

const Recommend = memo(props => {
  const { getBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return <div>Recommend</div>
})

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners,
})

const mapDispatchToProps = dispatch => ({
  getBanners() {
    dispatch(getTopBannerAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)

// export default Recommend
