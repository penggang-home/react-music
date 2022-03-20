// 栏目标题
import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const RecommendHeader = memo(props => {
  const { title, keywords } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map(item => {
            return (
              <div className="item" key={item}>
                <a className="link" href="todo">
                  {item}
                </a>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a className="link" href="todo">
          更多
        </a>
        <i className="icon sprite_02" />
      </div>
    </HeaderWrapper>
  )
})
RecommendHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
}
RecommendHeader.defaultProps = {
  keywords: [],
}

export default RecommendHeader
