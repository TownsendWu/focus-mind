import React from 'react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useNavigation } from '@/contexts/navigation-context';
import { getRouteById } from '@/config/routes';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const { getBreadcrumb } = useNavigation();

  // Use title from route config or prop, or default

  const breadcrumbItems = getBreadcrumb();

  // Get Home icon component
  const HomeIcon = getRouteById('home')?.icon || House;

  return (
    <div className="h-16.75 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
      <div className="flex flex-col flex-1">
        {breadcrumbItems.length > 0 && (
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={`${item.path}-${index}`}>
                  <BreadcrumbItem>
                    {item.isLast ? (
                      <BreadcrumbPage className="flex items-center gap-1">
                        {index === 0 ? (
                          <HomeIcon className="h-5 w-5" />
                        ) : (
                          item.text
                        )}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={item.path} className="flex items-center gap-1">
                          {index === 0 ? (
                            <HomeIcon className="h-5 w-5" />
                          ) : (
                            item.text
                          )}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!item.isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>
    </div>
  );
};

export default Header;