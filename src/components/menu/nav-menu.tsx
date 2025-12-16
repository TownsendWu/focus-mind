import React, { useState } from "react";
import { Logo } from "./logo";
import { Separator } from "../ui/separator";
import { NavUser } from "./nav-user";
import { useNavigation } from "@/contexts/navigation-context";

interface SidebarProps {
  // Props can be added in the future if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const { navRoutes, activeNavRoute, navigate } = useNavigation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleClick = (routeId: string) => {
    navigate(`/${routeId === 'home' ? '' : routeId}`);
  };

  return (
    <div className="w-15 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col items-center gap-2">
      <Logo />
      <Separator orientation="horizontal" className="mb-1" />

      {navRoutes.map((route) => {
        const Icon = route.icon;
        const isHovered = hoveredItem === route.id;
        const isActive = activeNavRoute?.id === route.id;

        return (
          <div key={route.id} className="relative">
            <div
              onClick={() => handleClick(route.id)}
              onMouseEnter={() => setHoveredItem(route.id)}
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
                  {route.label}
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
