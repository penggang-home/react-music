import React, { memo } from 'react'

// CSS
// import 'normalize.css'
import '@/assets/css/reset.css'

// Component
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'

const App = memo(() => {
  return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
  )
})

export default App
