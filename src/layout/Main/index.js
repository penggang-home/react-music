import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from '@/router'

const Main = memo(() => {
  return (
    <div>
      {renderRoutes(routes)}
    </div>
  )
})

export default Main
