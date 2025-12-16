# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Focus Mind is a React + TypeScript application built with Vite, designed as a productivity/focus management tool. The app features a three-column layout with a navigation menu, main content area, and a resizable side panel.

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite (using rolldown-vite)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **UI Components**: Radix UI primitives with custom components
- **Package Manager**: pnpm (required - see overrides in package.json)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Lint code
pnpm lint

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/         # 可复用UI组件
│   ├── ui/            # 基础UI组件（基于Radix UI）
│   │   ├── avatar.tsx      # 头像组件
│   │   ├── breadcrumb.tsx  # 面包屑导航
│   │   ├── button.tsx      # 按钮组件
│   │   ├── dialog.tsx      # 对话框组件
│   │   ├── dropdown-menu.tsx # 下拉菜单
│   │   ├── input.tsx       # 输入框
│   │   ├── separator.tsx   # 分隔线
│   │   ├── sheet.tsx       # 侧边抽屉
│   │   ├── skeleton.tsx    # 骨架屏
│   │   └── tooltip.tsx     # 工具提示
│   ├── menu/          # 导航相关组件
│   │   ├── logo.tsx        # Logo组件
│   │   ├── nav-menu.tsx    # 左侧导航菜单
│   │   └── nav-user.tsx    # 用户导航菜单
│   ├── header.tsx      # 页面头部组件
│   └── resizable-panel.tsx # 可调整大小的面板
├── config/            # 配置文件
│   └── routes.ts      # 集中式路由配置
├── contexts/          # React Context状态管理
│   └── navigation-context.tsx # 导航状态管理
├── features/          # 功能模块（预留）
├── hooks/             # 自定义React Hooks
│   └── use-mobile.ts  # 移动端检测Hook
├── layouts/           # 布局组件
│   ├── basic-layout.tsx    # 基础三栏布局
│   └── main-content-layout.tsx # 主内容区域布局
├── lib/               # 工具库
│   └── utils.ts       # 通用工具函数
├── pages/             # 路由页面组件
│   ├── home-page.tsx      # 首页
│   ├── tasks-page.tsx     # 任务页面
│   ├── ideas-page.tsx     # 想法页面
│   ├── trash-page.tsx     # 回收站页面
│   └── settings-page.tsx  # 设置页面
└── router/            # React Router配置
    └── index.tsx      # 路由器配置
```

## 代码架构详解

### 1. 应用入口和路由流程

**应用启动流程**：
- `main.tsx` → 应用入口，创建React根实例
- `App.tsx` → 使用 `RouterProvider` 提供路由上下文
- `router/index.tsx` → 使用 `createBrowserRouter` 创建路由配置
- 所有路由都包裹在 `BasicLayout` 中

**路由配置特点**：
- 使用 React Router v7 的 data router 模式
- 所有路由都在 `BasicLayout` 下作为子路由
- 每个路由都有 `handle` 属性用于配置面包屑
- 支持动态路由参数（如 `/tasks/:taskId`）

### 2. 布局系统架构

**三栏布局结构** ([`basic-layout.tsx`](src/layouts/basic-layout.tsx))：
1. **左侧栏** (固定50px)：
   - 导航菜单组件 ([`nav-menu.tsx`](src/components/menu/nav-menu.tsx))
   - Logo和垂直导航项
   - 用户导航组件

2. **中间栏** (flex-1)：
   - 使用 [`main-content-layout.tsx`](src/layouts/main-content-layout.tsx)
   - 包含Header组件和主内容区
   - Header显示面包屑导航
   - 主内容区使用 `<Outlet />` 渲染子路由

3. **右侧栏** (可调整宽度)：
   - 使用 [`resizable-panel.tsx`](src/components/resizable-panel.tsx)
   - 默认宽度40%，可调整范围20%-60%
   - 支持拖拽调整大小，带有视觉反馈

### 3. 导航系统核心逻辑

**路由配置** ([`routes.ts`](src/config/routes.ts))：
- 定义了完整的路由配置数组
- 每个路由包含：id、path、label、icon、breadcrumb等
- 提供辅助函数：
  - `getNavRoutes()`：获取显示在导航中的路由
  - `getRouteByPath()`：根据路径匹配路由配置
  - `generateBreadcrumbForPath()`：生成面包屑数据

**导航状态管理** ([`navigation-context.tsx`](src/contexts/navigation-context.tsx))：
- 使用 React Context 管理全局导航状态
- 提供：
  - 当前路径和路由信息
  - 导航数据（navRoutes）
  - 导航动作（navigate, navigateToRoute）
  - 工具函数（isRouteActive, getBreadcrumb）
- 智能处理动态路由的激活状态

**导航菜单组件** ([`nav-menu.tsx`](src/components/menu/nav-menu.tsx))：
- 垂直图标导航栏
- 悬停显示工具提示
- 活动状态高亮显示
- 点击切换路由

### 4. UI组件系统

**基础UI组件** (`src/components/ui/`)：
- 基于 Radix UI primitives 构建
- 使用 `class-variance-authority` (CVA) 管理变体
- 使用 `tailwind-merge` 合并 className
- 使用自定义 `cn()` 工具函数优化类名合并

**组件特点**：
- 完整的 TypeScript 类型支持
- 支持深色模式
- 可访问性良好（得益于Radix UI）
- 统一的设计系统

### 5. 数据流和状态管理

**当前状态管理方式**：
- 使用 React Context 进行全局状态管理
- NavigationContext 管理导航相关状态
- 本地状态使用 useState 和 useReducer
- 暂未使用状态管理库（如Redux、Zustand）

**数据流向**：
1. URL变化 → React Router → NavigationContext更新
2. NavigationContext → 组件订阅 → UI更新
3. 用户交互 → navigate函数 → URL变化

### 6. 关键设计模式和最佳实践

**使用的模式**：
- **Provider Pattern**：使用 Context Provider 包装应用
- **Composition Pattern**：组件通过组合而非继承实现复用
- **Custom Hooks**：封装复杂逻辑为可复用Hooks
- **Layout Components**：分离布局和业务逻辑

**代码组织原则**：
- 特性驱动组织（features文件夹预留）
- 关注点分离（UI、逻辑、配置分离）
- 类型安全（全面使用TypeScript）
- 可复用性（组件设计为通用可复用）

### 7. 工具和配置

**构建工具**：
- 使用 `rolldown-vite` 作为构建工具（性能优化）
- TypeScript 配置分为三部分：应用、节点、类型检查
- ESLint 配置包含 React 插件和 TypeScript 支持

**样式系统**：
- Tailwind CSS v4 使用 Vite 插件
- 支持深色模式
- 响应式设计
- 自定义动画支持（`tw-animate-css`）

### 8. 开发体验优化

**路径别名**：
- `@/` 指向 `src/` 目录
- 方便导入，避免相对路径

**类型导入**：
- 使用 `type` 关键字进行类型导入
- 优化打包体积

**组件导出**：
- 使用默认导出保持一致性
- 类型定义通过接口分离
