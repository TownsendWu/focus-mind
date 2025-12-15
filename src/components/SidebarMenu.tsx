import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, CheckCircle, Settings, User, Trash2 } from "lucide-react";

interface SidebarProps {
  activeItem?: string;
  onMenuClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // 菜单项配置，包含路由路径
  const menuItems = [
    { id: "home", icon: Home, tooltip: "首页", path: "/" },
    { id: "tasks", icon: CheckCircle, tooltip: "任务", path: "/tasks" },
    { id: "trash", icon: Trash2, tooltip: "回收站", path: "/trash" },
    { id: "settings", icon: Settings, tooltip: "设置", path: "/settings" },
    { id: "profile", icon: User, tooltip: "个人资料", path: "/profile" },
  ];

  // 根据当前路径确定激活的菜单项
  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname
    );
    if (currentItem && onMenuClick) {
      onMenuClick(currentItem.id);
    }
  }, [location.pathname, onMenuClick]);

  const handleClick = (item: (typeof menuItems)[0]) => {
    // 导航到对应的路由
    navigate(item.path);
    // 触发回调函数
    if (onMenuClick) {
      onMenuClick(item.id);
    }
  };

  return (
    <div className="w-12.5 h-full bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-4 gap-2">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.id;
        const isHovered = hoveredItem === item.id;

        return (
          <div key={item.id} className="relative">
            <button
              onClick={() => handleClick(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : isHovered
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }
              `}
            >
              <Icon size={20} />
            </button>

            {/* Tooltip */}
            {isHovered && (
              <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50">
                <div className="bg-gray-900 dark:bg-gray-700 text-white text-sm py-1 px-2 rounded whitespace-nowrap">
                  {item.tooltip}
                </div>
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
