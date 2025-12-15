import React from 'react';
import { Plus, Filter, Search } from 'lucide-react';

// 任务统计卡片组件
const TaskStatsCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">任务统计</h4>
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">待完成</span>
        <span className="font-medium">12</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">进行中</span>
        <span className="font-medium">5</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">已完成</span>
        <span className="font-medium">28</span>
      </div>
    </div>
  </div>
);

// 任务筛选组件
const TaskFilters = () => (
  <div className="space-y-2">
    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
      <Plus size={16} />
      新建任务
    </button>
    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
      <Filter size={16} />
      筛选
    </button>
  </div>
);

// 任务列表组件
const TaskList = () => (
  <div>
    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">任务列表</h4>
    <div className="space-y-1">
      <div className="px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        工作任务
      </div>
      <div className="px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        个人任务
      </div>
      <div className="px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        学习计划
      </div>
    </div>
  </div>
);

const TasksPage: React.FC = () => {
  // 任务页面布局配置
  const layoutConfig = {
    header: (
      <div className="flex items-center justify-between h-full px-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">任务管理</h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="搜索任务..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    ),
    sidebar: (
      <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4">
        <TaskStatsCard />
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">快速操作</h4>
          <TaskFilters />
        </div>
        <TaskList />
      </div>
    ),
  };

  // 将布局配置导出供 BasicLayout 使用
  TasksPage.layoutConfig = layoutConfig;

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