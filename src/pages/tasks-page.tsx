import React from 'react';

const TasksPage: React.FC = () => {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">任务</h2>
      <p className="text-gray-600 dark:text-gray-400">管理您的待办事项</p>

      {/* 这里可以添加任务列表的实际内容 */}
      <div className="mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <h3 className="font-semibold mb-3">今日任务</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span>完成项目文档</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span>团队会议下午3点</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <input type="checkbox" className="w-4 h-4" />
              <span>代码审查</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;