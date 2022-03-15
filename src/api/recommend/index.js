import { request } from '@/utils'

export function getTopBanners() {
  return request({
    url: '/banner',
  })
}
