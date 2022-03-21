import { produce } from 'immer'

import * as actionTypes from './constants'

const initState = {
  // 当前播放的歌曲
  currentSong: {},
  currentSongIndex: 0,
  // 播放列表
  // playList: [],
  playList: [
    {
      name: '海阔天空',
      id: 346509,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 11127,
          name: 'Beyond',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000004240302',
      fee: 8,
      v: 24,
      crbt: null,
      cf: '',
      al: {
        id: 34141,
        name: 'Super Collection',
        picUrl: 'https://p2.music.126.net/P5GU-MD-UnZeolFAZPP9SA==/60473139541494.jpg',
        tns: [],
        pic: 60473139541494,
      },
      dt: 307357,
      h: {
        br: 320000,
        fid: 0,
        size: 12321999,
        vd: -0.000265076,
      },
      m: {
        br: 160000,
        fid: 0,
        size: 6180612,
        vd: -0.000265076,
      },
      l: {
        br: 96000,
        fid: 0,
        size: 3723639,
        vd: -0.000265076,
      },
      a: null,
      cd: '1',
      no: 22,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 0,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 24,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mst: 9,
      cp: 7002,
      rtype: 0,
      rurl: null,
      mv: 376199,
      publishTime: 936806400000,
    },
    {
      name: 'Letting Go',
      id: 1923184888,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 29588305,
          name: '刘大拿',
          tns: [],
          alias: [],
        },
      ],
      alia: ['原唱：蔡健雅'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 6,
      crbt: null,
      cf: '',
      al: {
        id: 140916292,
        name: 'Letting Go',
        picUrl: 'https://p1.music.126.net/zmC73kE-LO370J4kjCZZyA==/109951167087160304.jpg',
        tns: [],
        pic_str: '109951167087160304',
        pic: 109951167087160300,
      },
      dt: 246378,
      h: {
        br: 320000,
        fid: 0,
        size: 9857325,
        vd: -48805,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5914413,
        vd: -46206,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3942957,
        vd: -44508,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 1645718400000,
      tns: ['这是一封离别信'],
    },
    {
      name: '十个字',
      id: 1923458630,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12286056,
          name: '褚晨茜',
          tns: [],
          alias: [],
        },
        {
          id: 31990599,
          name: '你的九儿',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 140974253,
        name: '十个字',
        picUrl: 'https://p1.music.126.net/-ie6oHH9goowvdTJ97vCXQ==/109951167091688042.jpg',
        tns: [],
        pic_str: '109951167091688042',
        pic: 109951167091688050,
      },
      dt: 162876,
      h: {
        br: 320000,
        fid: 0,
        size: 6517485,
        vd: -65732,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 3910509,
        vd: -63209,
      },
      l: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0,
    },
  ],
  // 0 顺序播放 1 随机播放 2 单曲循环
  playMode: 0,
  // 歌词列表
  lyricList: [],
  // 当前的歌曲索引
  currentLyricIndex: 0,
}

const reducer = (state = initState, action) =>
  produce(state, draft => {
    const { type } = action

    switch (type) {
      case actionTypes.CHANGE_CURRENT_SONG:
        draft.currentSong = action.currentSong
        break
      case actionTypes.CHANGE_CURRENT_SONG_INDEX:
        draft.currentSongIndex = action.currentSongIndex
        break
      case actionTypes.CHANGE_PLAY_LIST:
        draft.playList = action.playList
        break
      case actionTypes.CHANGE_PLAY_MODE:
        draft.playMode = action.playMode
        break
      case actionTypes.CHANGE_LYRIC_LIST:
        draft.lyricList = action.lyricList
        break
      case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
        draft.currentLyricIndex = action.index
        break
      default:
        return state
    }
  })

export default reducer
