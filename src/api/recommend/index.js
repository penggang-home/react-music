import { request } from '@/utils'

// Banner图
export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

// 推荐歌单
export function getHotRecommends(limit) {
  return request({
    url: `/personalized`,
    params: {
      limit,
    },
  })
}

// 新碟上架
export function getNewAlbums(limit) {
  return request({
    url: `/top/album`,
    params: {
      limit,
    },
  })
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx,
    },
  })
}
