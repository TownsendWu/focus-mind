import React from 'react';

const TrashPage: React.FC = () => {


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