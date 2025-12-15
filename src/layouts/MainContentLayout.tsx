import React from 'react';

interface MainContentLayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const MainContentLayout: React.FC<MainContentLayoutProps> = ({
  header,
  sidebar,
  children,
  className = ''
}) => {
  return (
    <div className={`h-full w-full flex flex-col ${className}`}>
      {header && (
        <header className="shrink-0">
          {header}
        </header>
      )}

      <div className="flex-1 flex overflow-hidden">
        {sidebar && (
          <aside className="w-80 shrink-0">
            {sidebar}
          </aside>
        )}

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainContentLayout;