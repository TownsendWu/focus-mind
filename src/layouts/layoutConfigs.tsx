import React from 'react';
import {
  Calendar,
  CheckCircle,
  Settings,
  User,
  Trash2,
  Plus,
  Filter,
  Search
} from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// 首页布局配置
export const homeLayoutConfig = {
  header: <Header title="首页" />,
  sidebar: null, // 首页不需要侧边栏
};

// 任务页面布局配置
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

export const tasksLayoutConfig = {
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
    </div>
  ),
};

// 回收站页面布局配置
export const trashLayoutConfig = {
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
  ),
};

// 设置页面布局配置
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

export const settingsLayoutConfig = {
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

// 个人资料页面布局配置
export const profileLayoutConfig = {
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
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-3"></div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200">用户名</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">user@example.com</p>
      </div>
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
    </div>
  ),
};

// 获取布局配置的映射
export const layoutConfigMap: Record<string, typeof homeLayoutConfig> = {
  '/': homeLayoutConfig,
  '/tasks': tasksLayoutConfig,
  '/trash': trashLayoutConfig,
  '/settings': settingsLayoutConfig,
  '/profile': profileLayoutConfig,
};