/* 
  [00:00.000] 作词 : 黄家驹
  [00:01.000] 作曲 : 黄家驹
  [00:02.00]编曲 : Beyond / 梁邦彦
  [00:03.00]
  [00:18.17]今天我 寒夜里看雪飘过
  [00:24.62]怀着冷却了的心窝漂远方
  [00:30.44]风雨里追赶 雾里分不清影踪
  [00:36.62]天空海阔你与我
  [00:39.68]可会变 (谁没在变)
  [00:43.21]多少次 迎着冷眼与嘲笑
  [00:49.55]从没有放弃过心中的理想
  [00:55.36]一刹那恍惚 若有所失的感觉
*/

/* 
  
*/
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
  const lineStrings = lyricString.split('\n')
  const lyricArr = []
  for (const v of lineStrings) {
    if (!v) continue

    const result = parseExp.exec(v)
    if (!result) continue

    // 1. 获取时间
    const m = result[1] * 60 * 1000
    const s = result[2] * 1000
    const ms = result[3].padEnd(3, '0') * 1
    const time = m + s + ms

    // 2.获取文本
    let text = v.replace(parseExp, '').trim()

    if (!text) text = ''

    lyricArr.push({
      time,
      text,
    })
  }

  return lyricArr
}
