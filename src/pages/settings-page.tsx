import React from 'react';

// 设置导航组件
const SettingsNav = () => (
  <nav className="space-y-1">
    <a href="#" className="block px-3 py-2 text-sm rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
      通用设置
    </a>
    <a href="#" className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
      外观设置
    </a>
    <a href="#" className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
      账户安全
    </a>
    <a href="#" className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
      通知设置
    </a>
    <a href="#" className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
      数据备份
    </a>
  </nav>
);

const SettingsPage: React.FC = () => {
  // 设置页面布局配置
  const layoutConfig = {
    header: (
      <div className="flex items-center justify-between h-full px-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">设置</h1>
        <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          保存更改
        </button>
      </div>
    ),
    sidebar: (
      <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">设置菜单</h4>
        <SettingsNav />
      </div>
    ),
  };

  // 将布局配置导出供 BasicLayout 使用
  SettingsPage.layoutConfig = layoutConfig;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">设置</h2>
      <p className="text-gray-600 dark:text-gray-400">管理您的应用程序设置</p>

      {/* 设置选项表单 */}
      <div className="mt-6 space-y-6">
        {/* 通用设置 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">通用设置</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                语言
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>简体中文</option>
                <option>English</option>
                <option>繁體中文</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                时区
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>北京时间 (GMT+8)</option>
                <option>东京时间 (GMT+9)</option>
                <option>纽约时间 (GMT-5)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 外观设置 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">外观设置</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                主题模式
              </label>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  浅色
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  深色
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  跟随系统
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 通知设置 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">通知设置</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-3" defaultChecked />
              <span className="text-sm">任务提醒</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-3" defaultChecked />
              <span className="text-sm">系统通知</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-3" />
              <span className="text-sm">营销邮件</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;