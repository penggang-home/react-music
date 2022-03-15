import React, { memo } from 'react'

import { headerLinks } from '@/constans/NavLink'

import { HeaderWrapper } from './style'
import { Input } from 'antd'
import { NavLink } from 'react-router-dom'

import { SearchOutlined } from '@ant-design/icons'

const Header = memo(() => {
  // 页面代码
  const showList = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div className="left">
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showList(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default Header
