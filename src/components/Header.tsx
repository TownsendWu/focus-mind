import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Focus Mind" }) => {
  return (
    <div className="h-14 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
};

export default Header;