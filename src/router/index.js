import { Redirect } from 'react-router-dom'

import Discover from '@/views/Discover'
import Friend from '@/views/Friend'
import Mine from '@/views/Mine'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: Discover,
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
