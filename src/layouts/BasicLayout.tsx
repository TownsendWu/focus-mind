import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarMenu from '../components/SidebarMenu';
import MainContentLayout from './MainContentLayout';
import ResizablePanel from '../components/ResizablePanel';
import { layoutConfigMap } from './layoutConfigMap';

interface BasicLayoutProps {
  thirdColumn?: React.ReactNode;
  className?: string;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({
  thirdColumn,
  className = ''
}) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const location = useLocation();

  // 直接根据路由路径获取布局配置，避免不必要的状态更新
  const currentLayoutConfig = layoutConfigMap[location.pathname] || layoutConfigMap['/'];

  return (
    <div className={`flex h-screen w-full ${className}`}>
      {/* 第一栏：固定宽度 50px */}
      <div className="w-12.5 h-full shrink-0">
        <SidebarMenu
          activeItem={activeMenu}
          onMenuClick={setActiveMenu}
        />
      </div>

      {/* 第二栏：主内容区域，占据剩余空间 */}
      <div className="flex-1 h-full">
        <MainContentLayout
          header={currentLayoutConfig.header}
          sidebar={currentLayoutConfig.sidebar}
        >
          {/* 使用 Outlet 渲染子路由内容 */}
          <Outlet />
        </MainContentLayout>
      </div>

      {/* 第三栏：副内容区域，可拖拽调整宽度 */}
      <ResizablePanel
        defaultWidth={0.4} // 默认 40% (2/5)
        minWidth={0.2} // 最小 1/5
        maxWidth={0.6} // 最大 3/5
        className="h-full"
      >
        <div className="h-full bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
          {thirdColumn || (
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">副内容区</h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                拖动左侧边框可调整宽度
              </p>
            </div>
          )}
        </div>
      </ResizablePanel>
    </div>
  );
};

export default BasicLayout;