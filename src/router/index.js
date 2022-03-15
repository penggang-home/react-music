import { Redirect } from 'react-router-dom'

// 一级路由
import Discover from '@/views/Discover'
import Friend from '@/views/Friend'
import Mine from '@/views/Mine'

// 二级路由
import Album from '@/views/Discover/ChildComponents/Album'
import Artist from '@/views/Discover/ChildComponents/Artist'
import DjRadio from '@/views/Discover/ChildComponents/DjRadio'
import Ranking from '@/views/Discover/ChildComponents/Ranking'
import Recommend from '@/views/Discover/ChildComponents/Recommend'
import Songs from '@/views/Discover/ChildComponents/Songs'

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
