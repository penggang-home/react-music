// 歌曲封面
import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'

import { getCount, getSizeImage } from '@/utils'

const SongsCover = memo(props => {
  const { coverInfo, isSource } = props

  const source = isSource && (
    <div className="cover-source text-nowrap">by {coverInfo.copywriter || coverInfo.creator.nickname}</div>
  )
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(coverInfo.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset" />
              {getCount(coverInfo.playCount)}
            </span>
            <i className="play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom ">{coverInfo.name}</div>
      {source}
    </SongsCoverWrapper>
  )
})

export default SongsCover
