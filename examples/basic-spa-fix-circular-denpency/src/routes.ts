// import { lazy } from 'ice';
import Layout from '@/layouts';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Notfound from '@/pages/NotFound';
import wrapperPage from '@/components/WrapperPage';
// import { lazy } from '#ice/lazy';

// const Dashboard = lazy(() => import('@/pages/Dashboard'));
// const Home = lazy(() => import('@/pages/Home'));
// const About = lazy(() => import('@/pages/About'));
// const Notfound = lazy(() => import('@/pages/NotFound'));

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
        wrappers: [wrapperPage]
      },
      {
        path: '/about',
        exact: true,
        component: About
      },
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '*',
        component: Notfound
      },
    ]
  }
];
