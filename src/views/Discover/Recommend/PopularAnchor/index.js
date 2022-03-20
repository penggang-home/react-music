// 热门主播
import React, { memo } from 'react'

import ThemeHeaderSmall from 'components/ThemeHeaderSmall'

import { hotPopularAnchor } from '@/constants'

import { PopularAnchorWrapper } from './style'

const PopularAnchor = memo(() => {
  return (
    <PopularAnchorWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotPopularAnchor.map(item => {
          return (
            <div className="item" key={item.url}>
              <a href='/todo' className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <a href='/todo' className="name">{item.name}</a>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </PopularAnchorWrapper>
  )
})

export default PopularAnchor
