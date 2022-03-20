// 发现页面
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { dicoverMenu } from '@/constants'

import { DiscoverWrapper, TopMenu } from './style'

const Discover = memo(props => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map(item => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
})

export default Discover
