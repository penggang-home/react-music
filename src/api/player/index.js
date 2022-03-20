import { request } from '@/utils/'

// 请求歌曲详情
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}

// 请求歌词
export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  })
}
