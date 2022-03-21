import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Slider, message, BackTop, Tooltip } from 'antd'
import { HeartFilled, AlignCenterOutlined, ArrowUpOutlined } from '@ant-design/icons'

import { getSizeImage, formatDuration, getPlaySong } from '@/utils'
import {
  getSongDetailAction,
  changePlayModeAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
} from '../store/actions'

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
  // 当前歌词 message 配置对象
  const [messageConfig, setMessageConfig] = useState({})
  // 是否显示歌词
  const [isShowLyric, setIsShowLyric] = useState(true)

  /* redux hooks */
  const dispatch = useDispatch()
  const { currentSong, mode, playList, lyricList, currentLyricIndex } = useSelector(
    state => ({
      currentSong: state.player.currentSong,
      mode: state.player.playMode,
      lyricList: state.player.lyricList,
      playList: state.player.playList,
      currentLyricIndex: state.player.currentLyricIndex,
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
  }, [currentSong])

  /* handle function */
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const audioTimeUpdate = e => {
    const realCurrentTime = e.target.currentTime * 1000
    // 当前是否正在拖动
    if (!isChanging) {
      setCurrentTime(realCurrentTime)
      setProgress((realCurrentTime / duration) * 200)
    }

    // 获取当前歌词
    if (lyricList.length) {
      let i = 0

      for (; i < lyricList.length; i++) {
        let lyricItem = lyricList[i]
        if (realCurrentTime < lyricItem.time) {
          break
        }
      }

      if (currentLyricIndex !== i - 1) {
        const text = lyricList[i - 1].text
        dispatch(changeCurrentLyricIndexAction(i - 1))

        let o = {}
        if (text) {
          // message.open({...})
          o = {
            content: text,
            duration: 0,
            icon: <HeartFilled style={{ color: '#c20c0c' }} />,
            // key 相同只会出现一个
            key: 'lyric',
            className: 'lyric lyric-info',
          }
        } else {
          o = {
            duration: 0,
            icon: <HeartFilled style={{ color: '#c20c0c' }} />,
            // key 相同只会出现一个
            key: 'lyric',
            className: 'lyric lyric-empty',
          }
        }
        setMessageConfig(o)
        if (isShowLyric) {
          showMessage(o)
        }

        console.log(text)
      }
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
      const currentTime = (v / 200) * duration
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
      const currentTime = ((v / 200) * duration) / 1000
      // 设置 audio 歌曲进度
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      // 设置当前松开拖动
      setIsChanging(false)
    },
    [duration]
  )

  const changeMusic = tag => {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    dispatch(changeCurrentIndexAndSongAction(tag))
  }
  const handleEnded = () => {
    console.log('handleEnded: ')
    // 播放结束
    if (mode === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const toggleLyric = () => {
    if (isShowLyric) {
      message.destroy('lyric')
    } else {
      showMessage()
    }
    setIsShowLyric(!isShowLyric)
  }
  const showMessage = config => {
    config ? message.open(config) : message.open(messageConfig)
  }

  const formatter = value => {
    return `${Math.floor((value / 200) * 100)}%`
  }
  const modeToName = () => {
    switch (mode) {
      case 0:
        return '循环'
      case 1:
        return '随机'
      case 2:
        return '单曲循环'
      default:
        return '-'
    }
  }

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <Tooltip placement="top" title="上一首">
            <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          </Tooltip>

          <Tooltip placement="top" title={isPlaying ? '暂停' : '播放'}>
            <button className="sprite_player play" onClick={playMusic}></button>
          </Tooltip>
          <Tooltip placement="top" title="下一首">
            <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
          </Tooltip>
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
                max={200}
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
            {/* <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button> */}
            <Tooltip placement="top" title={isShowLyric ? '隐藏歌词' : '显示歌词'}>
              <AlignCenterOutlined className="word" onClick={toggleLyric} />
            </Tooltip>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <Tooltip placement="top" title={modeToName()}>
              <button className="sprite_player btn loop" onClick={changePlayMode}></button>
            </Tooltip>
            <button className="sprite_player btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>

      <audio ref={audioRef} onTimeUpdate={audioTimeUpdate} onEnded={handleEnded}></audio>
      <BackTop>
        <ArrowUpOutlined className="back-top" />
      </BackTop>
    </PlayerBarWrapper>
  )
})

export default PlayerBar
