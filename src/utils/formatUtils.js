// 格式化 播放量单位
export function getCount(count) {
  // Number 无法转化为数字时，会转成NaN
  count = Number(count)

  if (isNaN(count)) return count

  if (count < 0) return
  if (count < 100000) return count

  if (count < 100000000) {
    return (count / 10000).toFixed(1) + '万'
  }
  return (count / 100000000).toFixed(2) + '亿'
}

// 获取一个有尺寸的图片
export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`
}

// 时间格式化为分秒
export function formatDuration(duration) {
  duration = Number(duration)

  if (isNaN(duration)) return '00:00'

  const m = Math.floor(duration / 1000 / 60)
    .toString()
    .padStart(2, '0')
  const s = Math.floor(((duration / 1000) % 60)).toString().padStart(2, '0')
  return `${m}:${s}`
}

// id转播放地址
export function getPlaySong(id){
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
