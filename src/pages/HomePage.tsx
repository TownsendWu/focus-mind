import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  // 首页布局配置
  const layoutConfig = {
    header: <Header title="首页" />,
    sidebar: null, // 首页不需要侧边栏
  };

  // 为了保持动态布局，我们需要将布局配置导出供 BasicLayout 使用
  HomePage.layoutConfig = layoutConfig;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">首页</h2>
      <p className="text-gray-600 dark:text-gray-400">欢迎来到 Focus Mind</p>
    </div>
  );
};

export default HomePage;