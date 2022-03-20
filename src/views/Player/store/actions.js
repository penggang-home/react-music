import { getSongDetail, getLyric } from '@/api/player/'
import { getRandomNumber, parseLyric } from '@/utils'

import * as actionTypes from '../store/constants'

// 改变 当前歌曲
const changeCurrentSongAction = currentSong => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
})

// 改变 当前歌曲索引
const changeCurrentSongIndexAction = currentSongIndex => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
})

// 改变 播放列表
const changePlayListAction = playList => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
})

// 改变 歌词
const changeLyricListAction = lyricList => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
})

// 改变播放模式
export const changePlayModeAction = playMode => ({
  type: actionTypes.CHANGE_PLAY_MODE,
  playMode,
})

// 获取歌曲详情
export const getSongDetailAction = ids => {
  return (dispatch, getState) => {
    // 拿到state
    const playList = getState().player.playList
    // 1.根据 id 查找 playList 中是否存在
    const songIndex = playList.findIndex(song => song.id === ids)

    // 2.判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {
      // 存在
      song = playList[songIndex]
      // 修改 当前索引
      dispatch(changeCurrentSongIndexAction(songIndex))
      // 修改 当前音乐
      dispatch(changeCurrentSongAction(song))
      // 请求 歌词
      dispatch(getLyricAction(song.id))
    } else {
      // 不存在
      getSongDetail(ids).then(res => {
        console.log('res: ', res)

        song = res.songs && res.songs[0]
        // 没拿到歌曲
        if (!song) return

        // 1.将歌曲添加到播放列表中
        const newPlayList = [...playList]
        newPlayList.push(song)

        // 2.更新列表
        dispatch(changePlayListAction(newPlayList))

        // 3.更新当前播放歌曲索引
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))

        // 4.更新当前歌曲
        dispatch(changeCurrentSongAction(song))
        // 5.请求歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

// 手动切换或自动播放的时候 更改当前索引和歌曲
export const changeCurrentIndexAndSongAction = tag => {
  return (dispatch, getState) => {
    let { playMode, currentSongIndex, playList } = getState().player
    // debugger
    switch (playMode) {
      case 1:
        // 随机
        let randomNumber = currentSongIndex
        while (randomNumber === currentSongIndex) {
          randomNumber = getRandomNumber(0, playList.length - 1)
        }
        currentSongIndex = randomNumber
        break
      default:
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0
        } else if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1
        }
    }

    const currentSong = playList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 请求歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

// 获取歌词
export const getLyricAction = id => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
      console.log('lyricList: ', lyricList)
    })
  }
}
