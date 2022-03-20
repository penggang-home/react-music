import React, { memo } from 'react'

import { getSongDetailAction } from '@/views/Player/store'

import { getSizeImage } from '@/utils'

import { TopRankingWrapper } from './style'
import { useDispatch } from 'react-redux'

const TopRanking = memo(props => {
  // props and state
  const { info } = props
  const tracks = info.tracks || []


  // redux hooks
  const dispatch = useDispatch()

  // handle
  const playMusic = item => {
    dispatch(getSongDetailAction(item.id))
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 100)} alt="" />
          <a className="image_cover" href="/todo">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <div className="btn play sprite_02"></div>
            <div className="btn favor sprite_02"></div>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <div className="name text-nowrap">{item.name}</div>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt; </a>
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking
