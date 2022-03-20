// 新碟上架
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NEW_ALBUM_PAGE_LIMIT} from '@/constants'

// Component
import { Carousel } from 'antd'
import RecommendHeader from 'components/RecommendHeader'
import AlbumCover from 'components/AlbumCover'

import { getNewAlbumAction } from '../store/actions'

import { AlbumWrapper } from './style'

const NewAlbum = memo(() => {
  // redux hooks
  const dispatch = useDispatch()
  const newAlbums = useSelector(state => state.recommend.newAlbums)

  // hooks
  const carouselRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_PAGE_LIMIT))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <RecommendHeader title="新碟上架" />
      <div className="content">
        <div onClick={e => carouselRef.current.prev()} className="arrow sprite_02 arrow-left"></div>

        <div className="album">
          <Carousel ref={carouselRef} autoplay>
            {[0, 1].map(item => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map(album => {
                    return <AlbumCover info={album} type="small" key={album.id}/>
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>

        <div  onClick={e => carouselRef.current.next()} className="arrow sprite_02 arrow-right"></div>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum
