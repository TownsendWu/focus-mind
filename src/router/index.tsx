import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';

// 页面组件 - 暂时使用简单的占位组件
const HomePage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">首页</h2>
    <p className="text-gray-600 dark:text-gray-400">欢迎来到 Focus Mind</p>
  </div>
);

const TasksPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">任务</h2>
    <p className="text-gray-600 dark:text-gray-400">管理您的待办事项</p>
  </div>
);

const TrashPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">回收站</h2>
    <p className="text-gray-600 dark:text-gray-400">查看已删除的项目</p>
  </div>
);

const SettingsPage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">设置</h2>
    <p className="text-gray-600 dark:text-gray-400">配置应用程序设置</p>
  </div>
);

const ProfilePage = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">个人资料</h2>
    <p className="text-gray-600 dark:text-gray-400">管理您的个人信息</p>
  </div>
);

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