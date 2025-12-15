import React from 'react';

// 已删除项目统计组件
const DeletedItemsStats = () => (
  <div>
    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">已删除项目</h4>
    <div className="space-y-2 text-sm">
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-600 dark:text-gray-400">任务</span>
        <span className="text-gray-800 dark:text-gray-200">3</span>
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-600 dark:text-gray-400">笔记</span>
        <span className="text-gray-800 dark:text-gray-200">7</span>
      </div>
      <div className="flex justify-between items-center py-2">
        <span className="text-gray-600 dark:text-gray-400">文件</span>
        <span className="text-gray-800 dark:text-gray-200">2</span>
      </div>
    </div>
    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-500">
        项目将在30天后自动永久删除
      </p>
    </div>
  </div>
);

const TrashPage: React.FC = () => {
  // 回收站页面布局配置
  const layoutConfig = {
    header: (
      <div className="flex items-center justify-between h-full px-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">回收站</h1>
        <button className="px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
          清空回收站
        </button>
      </div>
    ),
    sidebar: (
      <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <DeletedItemsStats />
      </div>
    ),
  };

  // 将布局配置导出供 BasicLayout 使用
  TrashPage.layoutConfig = layoutConfig;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">回收站</h2>
      <p className="text-gray-600 dark:text-gray-400">查看已删除的项目</p>

      {/* 已删除项目列表 */}
      <div className="mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">名称</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">类型</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">删除时间</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3">项目文档草稿</td>
                <td className="px-4 py-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">笔记</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">2024-01-10 14:30</td>
                <td className="px-4 py-3">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">恢复</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">旧任务列表</td>
                <td className="px-4 py-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">任务</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">2024-01-09 09:15</td>
                <td className="px-4 py-3">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">恢复</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">会议记录.txt</td>
                <td className="px-4 py-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">文件</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">2024-01-08 16:45</td>
                <td className="px-4 py-3">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">恢复</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrashPage;