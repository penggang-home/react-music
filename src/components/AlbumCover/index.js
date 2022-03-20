import React, { memo } from 'react'

import { AlbumWrapper } from './style'

import { getSizeImage } from '@/utils'

const AlbumCover = memo(props => {
  // large small
  const { info, type } = props

  let width = 0,
    size = 0,
    bgp = 0
  if (type === 'large') {
    width = 153
    size = 130
    bgp = '845px'
  } else if (type === 'small') {
    width = 118
    size = 100
    bgp = '-570px'
  }

  return (
    <AlbumWrapper size={size + 'px'} width={width + 'px'} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl,size)} alt="" />
        <a href="todo" className="cover sprite_cover">
          专辑
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover
