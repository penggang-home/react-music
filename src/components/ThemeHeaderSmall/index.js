import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { SmallHeaderWrapper } from './style'

const ThemeHeaderSmall = memo(props => {
  const { title, more } = props

  const rightContent = more && (
    <a className="right" href="/todo">
      {more}
    </a>
  )
  return (
    <SmallHeaderWrapper>
      <div className="left">{title}</div>
      {rightContent}
    </SmallHeaderWrapper>
  )
})
ThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
}

export default ThemeHeaderSmall
