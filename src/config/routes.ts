import { Home, CheckCircle, Lightbulb, Trash2, Settings } from 'lucide-react';

export interface RouteConfig {
  id: string;
  path: string;
  label: string;
  icon?: any;
  title?: string;
  description?: string;
  breadcrumb?: string | ((match: any) => string);
  children?: RouteConfig[];
  showInNav?: boolean;
  order?: number;
}

export const routesConfig: RouteConfig[] = [
  {
    id: 'home',
    path: '/',
    label: 'Home',
    icon: Home,
    title: 'Focus Mind',
    breadcrumb: 'Home',
    showInNav: true,
    order: 1,
  },
  {
    id: 'tasks',
    path: '/tasks',
    label: 'Tasks',
    icon: CheckCircle,
    title: 'Tasks',
    breadcrumb: 'Tasks',
    showInNav: true,
    order: 2,
  },
  {
    id: 'task-detail',
    path: '/tasks/:taskId',
    label: 'Task Detail',
    breadcrumb: (match: any) => `Task ${match.params.taskId}`,
    showInNav: false,
  },
  {
    id: 'ideas',
    path: '/ideas',
    label: 'Ideas',
    icon: Lightbulb,
    title: 'Ideas',
    breadcrumb: 'Ideas',
    showInNav: true,
    order: 3,
  },
  {
    id: 'idea-detail',
    path: '/ideas/:ideaId',
    label: 'Idea Detail',
    breadcrumb: (match: any) => `Idea ${match.params.ideaId}`,
    showInNav: false,
  },
  {
    id: 'trash',
    path: '/trash',
    label: 'Trash',
    icon: Trash2,
    title: 'Trash',
    breadcrumb: 'Trash',
    showInNav: false,
    order: 4,
  },
  {
    id: 'settings',
    path: '/settings',
    label: 'Settings',
    icon: Settings,
    title: 'Settings',
    breadcrumb: 'Settings',
    showInNav: false,
    order: 5,
  },
  {
    id: 'settings-section',
    path: '/settings/:section',
    label: 'Settings Section',
    breadcrumb: (match: any) => {
      const sectionMap: Record<string, string> = {
        profile: 'Profile',
        account: 'Account',
        preferences: 'Preferences',
      };
      return sectionMap[match.params.section as string] || match.params.section;
    },
    showInNav: false,
  },
];

// Helper functions
export function getNavRoutes(): RouteConfig[] {
  return routesConfig
    .filter(route => route.showInNav)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

export function getRouteByPath(path: string): RouteConfig | null {
  // Simple exact match
  const exactMatch = routesConfig.find(route => route.path === path);
  if (exactMatch) return exactMatch;

  // Match dynamic routes (basic implementation)
  for (const route of routesConfig) {
    if (route.path.includes(':')) {
      const routeParts = route.path.split('/');
      const pathParts = path.split('/');

      if (routeParts.length !== pathParts.length) continue;

      let matches = true;
      for (let i = 0; i < routeParts.length; i++) {
        if (!routeParts[i].startsWith(':') && routeParts[i] !== pathParts[i]) {
          matches = false;
          break;
        }
      }

      if (matches) return route;
    }
  }

  return null;
}

export function getRouteById(id: string): RouteConfig | null {
  return routesConfig.find(route => route.id === id) || null;
}

export function generateBreadcrumbForPath(path: string, matches?: any[]): Array<{
  text: string;
  path: string;
  isLast: boolean;
}> {
  const breadcrumbs: Array<{ text: string; path: string; isLast: boolean }> = [];

  // Always start with Home
  const homeRoute = getRouteById('home');
  if (homeRoute) {
    breadcrumbs.push({
      text: homeRoute.label,
      path: homeRoute.path,
      isLast: path === '/',
    });
  }

  // If not home page, find the current route
  if (path !== '/') {
    const route = getRouteByPath(path);
    if (route) {
      let text = route.label;

      // If it's a dynamic route and we have matches, use the breadcrumb function
      if (route.breadcrumb && typeof route.breadcrumb === 'function' && matches) {
        const match = matches.find(m => m.route.path === route.path);
        if (match) {
          text = route.breadcrumb(match);
        }
      } else if (route.breadcrumb && typeof route.breadcrumb === 'string') {
        text = route.breadcrumb;
      }

      breadcrumbs.push({
        text,
        path: route.path,
        isLast: true,
      });

      // Update the last flag for Home
      if (breadcrumbs.length > 1) {
        breadcrumbs[0].isLast = false;
      }
    }
  }

  return breadcrumbs;
}