import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Slider } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatDuration, getPlaySong } from '@/utils'
import { getSongDetailAction, changePlayModeAction, changeCurrentIndexAndSongAction } from '../store/actions'

import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style'

const PlayerBar = memo(() => {
  /* props and state */
  // 当前播放时间 00:00
  const [currentTime, setCurrentTime] = useState(0)
  // Slider 进度
  const [progress, setProgress] = useState(0)
  // 是否正在拖动
  const [isChanging, setIsChanging] = useState(false)
  // 是否播放
  const [isPlaying, setIsPlaying] = useState(false)
  // 当前歌曲总时长
  const [duration, setDuration] = useState(0)
  // 当前封面
  const [picUrl, setPicUrl] = useState('')
  // 当前歌手名称
  const [singerName, setSingerName] = useState('-')

  /* redux hooks */
  const dispatch = useDispatch()
  const { currentSong, mode } = useSelector(
    state => ({
      currentSong: state.player.currentSong,
      mode: state.player.playMode,
    }),
    shallowEqual
  )

  /* hooks */
  const audioRef = useRef()

  useEffect(() => {
    dispatch(getSongDetailAction(346509))
  }, [dispatch])

  useEffect(() => {
    setDuration(currentSong.dt || 0)
    setPicUrl((currentSong.al && currentSong.al.picUrl) || '')
    setSingerName((currentSong.ar && currentSong.ar[0].name) || '-')

    audioRef.current.src = getPlaySong(currentSong.id)

    if (isPlaying) {
      audioRef.current
        .play()
        .then(res => {
          setIsPlaying(true)
        })
        .catch(err => {
          setIsPlaying(false)
        })
    }
  }, [currentSong, isPlaying])

  /* handle function */
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const audioTimeUpdate = e => {
    // 当前是否正在拖动
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / duration) * 300)
    }
  }

  const changePlayMode = () => {
    let newMode = mode + 1
    if (newMode > 2) {
      newMode = 0
    }
    dispatch(changePlayModeAction(newMode))
  }

  const sliderChange = useCallback(
    v => {
      const currentTime = (v / 300) * duration
      setCurrentTime(currentTime)
      // 设置当前为正在拖动
      setIsChanging(true)
      // 设置进度
      setProgress(v)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    v => {
      const currentTime = ((v / 300) * duration) / 1000
      // 设置 audio 歌曲进度
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      // 设置当前松开拖动
      setIsChanging(false)
    },
    [duration]
  )

  const changeMusic = tag => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }
  const handleEnded = () => {
    // 播放结束
    if (mode === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const formatter = value => {
    return `${Math.floor((value / 300) * 100)}%`
  }

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={playMusic}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
        </Control>

        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <a href="/todo" className="song-name">
                {currentSong.name}
              </a>
              <a href="/todo" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                value={progress}
                max={300}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
                tipFormatter={formatter}
              />

              <div className="time">
                <span className="now-time">{formatDuration(currentTime)}</span>
                <span className="divider"></span>
                <span className="duration">{formatDuration(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>

        <Operator mode={mode}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={changePlayMode}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>

      <audio ref={audioRef} onTimeUpdate={audioTimeUpdate} onEnded={handleEnded}></audio>
    </PlayerBarWrapper>
  )
})

export default PlayerBar