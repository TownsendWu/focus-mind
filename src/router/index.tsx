import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/basic-layout';
import HomePage from '../pages/home-page';
import TasksPage from '../pages/tasks-page';
import TrashPage from '../pages/trash-page';
import SettingsPage from '../pages/settings-page';
import ProfilePage from '../pages/ideas-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        handle: {
          breadcrumb: 'Home',
        },
      },
      {
        path: 'tasks',
        element: <TasksPage />,
        handle: {
          breadcrumb: 'Tasks',
        },
      },
      {
        path: 'tasks/:taskId',
        element: <TasksPage />,
        handle: {
          breadcrumb: (match: any) => `Task ${match.params.taskId}`,
        },
      },
      {
        path: 'trash',
        element: <TrashPage />,
        handle: {
          breadcrumb: 'Trash',
        },
      },
      {
        path: 'settings',
        element: <SettingsPage />,
        handle: {
          breadcrumb: 'Settings',
        },
      },
      {
        path: 'settings/:section',
        element: <SettingsPage />,
        handle: {
          breadcrumb: (match: any) => {
            const sectionMap: Record<string, string> = {
              profile: 'Profile',
              account: 'Account',
              preferences: 'Preferences',
            };
            return sectionMap[match.params.section as string] || match.params.section;
          },
        },
      },
      {
        path: 'ideas',
        element: <ProfilePage />,
        handle: {
          breadcrumb: 'Ideas',
        },
      },
      {
        path: 'ideas/:ideaId',
        element: <ProfilePage />,
        handle: {
          breadcrumb: (match: any) => `Idea ${match.params.ideaId}`,
        },
      },
    ],
  },
]);