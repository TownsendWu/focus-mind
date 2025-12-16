import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, CheckCircle, Lightbulb } from "lucide-react";
import { Logo } from "./logo";
import { Separator } from "../ui/separator";
import { NavUser } from "./nav-user";

interface SidebarProps {
  activeItem?: string;
  onMenuClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  // 菜单项配置，包含路由路径
  const menuItems = [
    { id: "home", icon: Home, tooltip: "首页", path: "/" },
    { id: "tasks", icon: CheckCircle, tooltip: "任务", path: "/tasks" },
    { id: "ideas", icon: Lightbulb, tooltip: "想法", path: "/ideas" },
  ];

  // 根据当前路径或点击状态确定激活的菜单项
  const currentActiveItem =
    activeItem ||
    clickedItem ||
    (() => {
      const currentItem = menuItems.find(
        (item) => item.path === location.pathname
      );
      return currentItem ? currentItem.id : "home";
    })();

  const handleClick = (item: (typeof menuItems)[0]) => {
    // 立即设置点击状态以提供即时视觉反馈
    setClickedItem(item.id);
    // 导航到对应的路由
    navigate(item.path);
    // 触发回调函数
    if (onMenuClick) {
      onMenuClick(item.id);
    }
  };

  return (
    <div className="w-15 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2">
      <Logo />
      <Separator orientation="horizontal" className="mb-1" />

      {menuItems.map((item) => {
        const Icon = item.icon;
        const isHovered = hoveredItem === item.id;
        const isActive = currentActiveItem === item.id;

        return (
          <div key={item.id} className="relative">
            <div
              onClick={() => handleClick(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                p-2.5 rounded-md cursor-pointer transition-colors duration-200 mb-1
                ${
                  isActive
                    ? "bg-gray-200"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              <Icon size={20} />
            </div>

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

      <NavUser />
    </div>
  );
};

export default Sidebar;
