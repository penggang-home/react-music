import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getTopBannerAction } from '../store/actions'

// Style
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

// Component
import { Carousel } from 'antd'

const Banner = memo(() => {
  // 状态
  const [currentIndex, setCurrentIndex] = useState(0)

  // Redux
  // 组件和 redux 关联：获取数据和进行操作
  const { banners } = useSelector(
    state => ({
      banners: state.recommend.topBanners,
    }),
    // 默认进行的是 === ,传入 shallowEqual 进行浅层比较
    shallowEqual
  )

  // hooks
  const BannerRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他业务逻辑
  const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel ref={BannerRef} effect="fade" autoplay beforeChange={bannerChange}>
            {banners.map(item => {
              return (
                <div className="banner-item" key={item.targetId}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className="control">
          <button className="btn left" onClick={e => BannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => BannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default Banner
