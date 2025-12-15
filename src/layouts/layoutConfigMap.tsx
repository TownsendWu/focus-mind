import HomePage from '../pages/HomePage';
import TasksPage from '../pages/TasksPage';
import TrashPage from '../pages/TrashPage';
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';

// 定义布局配置类型
interface LayoutConfig {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
}

// 定义带有布局配置的页面类型
interface PageWithLayoutConfig {
  layoutConfig?: LayoutConfig;
}

// 获取页面的布局配置
const getPageLayoutConfig = (PageComponent: any): LayoutConfig => {
  return (PageComponent as PageWithLayoutConfig)?.layoutConfig || { header: null, sidebar: null };
};

// 创建布局配置映射
export const layoutConfigMap: Record<string, LayoutConfig> = {
  '/': getPageLayoutConfig(HomePage),
  '/tasks': getPageLayoutConfig(TasksPage),
  '/trash': getPageLayoutConfig(TrashPage),
  '/settings': getPageLayoutConfig(SettingsPage),
  '/profile': getPageLayoutConfig(ProfilePage),
};