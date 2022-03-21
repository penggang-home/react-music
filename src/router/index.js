import React from 'react'
import { Redirect } from 'react-router-dom'

// // 一级路由
// import Discover from '@/views/Discover'
// import Friend from '@/views/Friend'
// import Mine from '@/views/Mine'

// // 二级路由
// import Album from '@/views/Discover/Album'
// import Artist from '@/views/Discover/Artist'
// import DjRadio from '@/views/Discover/DjRadio'
// import Ranking from '@/views/Discover/Ranking'
// import Recommend from '@/views/Discover/Recommend'
// import Songs from '@/views/Discover/Songs'
// import Player from '@/views/Player'

// 一级路由
// import Discover from '@/views/Discover'
const Discover = React.lazy(() => import('@/views/Discover/'))
const Friend = React.lazy(() => import('@/views/Friend'))
const Mine = React.lazy(() => import('@/views/Mine'))

// 二级路由
const Album = React.lazy(() => import('@/views/Discover/Album'))
const Artist = React.lazy(() => import('@/views/Discover/Artist'))
const DjRadio = React.lazy(() => import('@/views/Discover/DjRadio'))
const Ranking = React.lazy(() => import('@/views/Discover/Ranking'))
const Recommend = React.lazy(() => import('@/views/Discover/Recommend'))
const Songs = React.lazy(() => import('@/views/Discover/Songs'))
const Player = React.lazy(() => import('@/views/Player'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: Ranking,
      },
      {
        path: '/discover/songs',
        component: Songs,
      },
      {
        path: '/discover/djradio',
        component: DjRadio,
      },
      {
        path: '/discover/artist',
        component: Artist,
      },
      {
        path: '/discover/album',
        component: Album,
      },
      {
        path: '/discover/player',
        component: Player,
      },
    ],
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/friend',
    component: Friend,
  },
]

export default routes
