import React, { useState, useRef, useEffect, useCallback } from 'react';

interface ResizablePanelProps {
  children: React.ReactNode;
  defaultWidth?: number; // 默认宽度比例 (0-1)
  minWidth?: number; // 最小宽度比例 (0-1)
  maxWidth?: number; // 最大宽度比例 (0-1)
  onResize?: (width: number) => void; // 宽度变化回调
  className?: string;
  enableResize?: boolean; // 是否启用调整大小
}

const ResizablePanel: React.FC<ResizablePanelProps> = ({
  children,
  defaultWidth = 0.4, // 默认 40%
  minWidth = 0.2, // 最小 20% (1/5)
  maxWidth = 0.6, // 最大 60% (3/5)
  onResize,
  className = '',
  enableResize = true
}) => {
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(defaultWidth);

  // 处理鼠标按下事件
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!enableResize) return;

    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = width;

    // 防止选中文本
    e.preventDefault();
    e.stopPropagation();
  }, [enableResize, width]);

  // 处理鼠标移动事件
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;

    const containerWidth = containerRef.current.parentElement?.clientWidth || 0;
    if (containerWidth === 0) return;

    // 计算移动的距离
    const deltaX = e.clientX - startXRef.current;
    const newWidth = startWidthRef.current - (deltaX / containerWidth);

    // 限制在最小和最大宽度之间
    const clampedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    setWidth(clampedWidth);
    onResize?.(clampedWidth);
  }, [isResizing, minWidth, maxWidth, onResize]);

  // 处理鼠标释放事件
  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  // 全局监听鼠标事件
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ flex: width }}
    >
      {children}

      {enableResize && (
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 cursor-col-resize z-10
            ${isResizing
              ? 'bg-blue-500'
              : 'hover:bg-gray-300 dark:hover:bg-gray-600'
            } transition-colors group`}
          onMouseDown={handleMouseDown}
        >
          {/* 拖动手柄指示器 */}
          <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
            w-1 h-12 rounded-full transition-all duration-200
            ${isResizing
              ? 'bg-blue-500 opacity-100'
              : 'bg-gray-400 dark:bg-gray-500 opacity-50 group-hover:opacity-100'
            }`} />

          {/* 扩大点击区域 */}
          <div className="absolute -left-1 top-0 bottom-0 w-3" />
        </div>
      )}
    </div>
  );
};

export default ResizablePanel;