import React, { memo, Suspense } from 'react'

// CSS
// import 'normalize.css'
import 'antd/dist/antd.less'
import '@/assets/css/reset.less'
import '@/assets/css/reset.css'

// Component
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'
import PlayerBar from '@/views/Player/PlayerBar'

const App = memo(() => {
  return (
    <>
      <Header />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Main />
      </Suspense>
      <Footer />

      <PlayerBar />
    </>
  )
})

export default App
