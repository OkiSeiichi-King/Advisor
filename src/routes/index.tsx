import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const routes: any = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
];

export default routes;
