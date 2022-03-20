// 歌手 艺术家
import React, { memo } from 'react'

import { HotArtist } from '@/constants'

import ThemeHeaderSmall from 'components/ThemeHeaderSmall'

import { ArtistWrapper } from './style'

const Artist = memo(() => {
  return (
    <ArtistWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="radio-list">
        {HotArtist.map((item, index) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="/todo">申请成为网易音乐人</a>
      </div>
    </ArtistWrapper>
  )
})

export default Artist
