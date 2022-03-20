import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

const Player = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>info</h2>
          <h2>content</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>list</h2>
          <h2>simi song</h2>
          <h2>download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default Player
