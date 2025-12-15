import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import HomePage from '../pages/HomePage';
import TasksPage from '../pages/TasksPage';
import TrashPage from '../pages/TrashPage';
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/tasks',
        element: <TasksPage />,
      },
      {
        path: '/trash',
        element: <TrashPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
]);