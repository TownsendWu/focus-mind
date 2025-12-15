import React from 'react';

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = "工作区" }) => {
  const menuItems = [
    { name: "工作区", active: activeItem === "工作区" },
    { name: "项目", active: activeItem === "项目" },
    { name: "统计", active: activeItem === "统计" }
  ];

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">导航菜单</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`px-3 py-2 rounded cursor-pointer ${
                item.active
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;