import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { type RouteConfig } from '@/config/routes';
import { getNavRoutes, getRouteByPath } from '@/config/routes';

interface NavigationContextType {
  // Current state
  currentPath: string;
  currentRoute: RouteConfig | null;
  activeNavRoute: RouteConfig | null;

  // Navigation data
  navRoutes: RouteConfig[];

  // Actions
  navigate: (to: string) => void;
  navigateToRoute: (routeId: string) => void;

  // Utilities
  isRouteActive: (routeId: string) => boolean;
  getBreadcrumb: () => Array<{
    text: string;
    path: string;
    isLast: boolean;
  }>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const location = useLocation();
  const navigateRouter = useNavigate();

  // Get navigation routes (those that should appear in the nav menu)
  const navRoutes = useMemo(() => getNavRoutes(), []);

  // Current route based on path
  const currentRoute = useMemo(() => {
    return getRouteByPath(location.pathname);
  }, [location.pathname]);

  // Active navigation route (the nav menu item that should be highlighted)
  const activeNavRoute = useMemo(() => {
    // First try to find exact match in nav routes
    let activeRoute = navRoutes.find(route => route.path === location.pathname);

    // If not found, try to match parent routes for dynamic routes
    if (!activeRoute && currentRoute) {
      // For dynamic routes like /tasks/:taskId, find the parent like /tasks
      const pathBase = location.pathname.split('/')[1];
      activeRoute = navRoutes.find(route => route.path === `/${pathBase}`);
    }

    return activeRoute || null;
  }, [location.pathname, navRoutes, currentRoute]);

  // Navigation functions
  const navigate = useMemo(() => (to: string) => {
    navigateRouter(to);
  }, [navigateRouter]);

  const navigateToRoute = useMemo(() => (routeId: string) => {
    const route = getRouteByPath(routeId);
    if (route) {
      navigateRouter(route.path);
    }
  }, [navigateRouter]);

  // Utility functions
  const isRouteActive = useMemo(() => (routeId: string) => {
    const route = getRouteByPath(routeId);
    if (!route) return false;

    // Check if current path starts with the route path (for dynamic routes)
    if (route.path.includes(':')) {
      const pathBase = route.path.split('/')[1];
      return location.pathname.startsWith(`/${pathBase}`);
    }

    return location.pathname === route.path;
  }, [location.pathname]);

  const getBreadcrumb = useMemo(() => () => {
    const breadcrumbs: Array<{ text: string; path: string; isLast: boolean }> = [];

    // Always start with Home
    const homeRoute = navRoutes.find(r => r.id === 'home');
    if (homeRoute) {
      breadcrumbs.push({
        text: homeRoute.label,
        path: homeRoute.path,
        isLast: location.pathname === '/',
      });
    }

    // If not home page, find the current route
    if (location.pathname !== '/' && currentRoute) {
      let text = currentRoute.label;

      // Handle dynamic route breadcrumbs
      if (currentRoute.breadcrumb && typeof currentRoute.breadcrumb === 'function') {
        // For now, just use the label
        // In a real implementation, you'd need access to route params
        text = currentRoute.label;
      } else if (currentRoute.breadcrumb && typeof currentRoute.breadcrumb === 'string') {
        text = currentRoute.breadcrumb;
      }

      breadcrumbs.push({
        text,
        path: location.pathname,
        isLast: true,
      });

      // Update the last flag for Home
      if (breadcrumbs.length > 1) {
        breadcrumbs[0].isLast = false;
      }
    }

    return breadcrumbs;
  }, [location.pathname, currentRoute, navRoutes]);

  const contextValue: NavigationContextType = {
    currentPath: location.pathname,
    currentRoute,
    activeNavRoute,
    navRoutes,
    navigate,
    navigateToRoute,
    isRouteActive,
    getBreadcrumb,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

// Export a hook for convenience
export default useNavigation;