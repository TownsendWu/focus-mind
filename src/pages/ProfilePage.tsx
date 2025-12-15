import React from 'react';

// 用户信息侧边栏组件
const UserProfileSidebar = () => (
  <div className="text-center mb-6">
    <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3"></div>
    <h4 className="font-semibold text-gray-800 dark:text-gray-200">用户名</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400">user@example.com</p>
  </div>
);

// 用户统计信息组件
const UserStats = () => (
  <div className="space-y-4 text-sm">
    <div>
      <span className="text-gray-600 dark:text-gray-400">加入时间</span>
      <p className="text-gray-800 dark:text-gray-200">2024年1月1日</p>
    </div>
    <div>
      <span className="text-gray-600 dark:text-gray-400">完成任务</span>
      <p className="text-gray-800 dark:text-gray-200">156 个</p>
    </div>
    <div>
      <span className="text-gray-600 dark:text-gray-400">专注时长</span>
      <p className="text-gray-800 dark:text-gray-200">324 小时</p>
    </div>
  </div>
);

const ProfilePage: React.FC = () => {
  // 个人资料页面布局配置
  const layoutConfig = {
    header: (
      <div className="flex items-center justify-between h-full px-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">个人资料</h1>
        <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          编辑资料
        </button>
      </div>
    ),
    sidebar: (
      <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <UserProfileSidebar />
        <UserStats />
      </div>
    ),
  };

  // 将布局配置导出供 BasicLayout 使用
  ProfilePage.layoutConfig = layoutConfig;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">个人资料</h2>
      <p className="text-gray-600 dark:text-gray-400">管理您的个人信息</p>

      {/* 个人信息表单 */}
      <div className="mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">基本信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                用户名
              </label>
              <input
                type="text"
                defaultValue="FocusMindUser"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                邮箱
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                姓名
              </label>
              <input
                type="text"
                defaultValue="张三"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                手机号
              </label>
              <input
                type="tel"
                defaultValue="138****8888"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              个人简介
            </label>
            <textarea
              rows={4}
              defaultValue="热爱生活，追求效率，专注于每一个当下。"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </div>

      {/* 安全设置 */}
      <div className="mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">安全设置</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">修改密码</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">定期更改密码有助于账户安全</p>
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                修改
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">两步验证</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">增强账户安全性</p>
              </div>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                设置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;