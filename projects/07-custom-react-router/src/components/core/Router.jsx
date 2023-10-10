import { useEffect, useState, Children } from 'react';
import { EVENTS } from '../../constants/events';
import { match } from 'path-to-regexp';
import NotFound from '../pages/NotFound';
import { getCurrentPath } from '../../helpers/getCurrentPath';

export default function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = NotFound,
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };
    window.addEventListener(EVENTS.PUSH_PATH, onLocationChange);
    window.addEventListener(EVENTS.POP_PATH, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSH_PATH, onLocationChange);
      window.removeEventListener(EVENTS.POP_PATH, onLocationChange);
    };
  }, []);

  let routeParams = {};

  // Routes from children
  const routesFromChildren = Children.map(children, ({ type, props }) => {
    const { name } = type;
    const isRoute = name === 'Route';
    return isRoute ? props : null;
  });

  const mergedRoutes = routes.concat(routesFromChildren).filter(Boolean);

  const PageToRender = mergedRoutes.find(({ path }) => {
    if (path === currentPath) return true;
    const matcherUrl = match(path, { decode: decodeURIComponent });
    const matched = matcherUrl(currentPath);
    if (!matched) return false;
    routeParams = matched.params;
    return true;
  })?.component;

  return PageToRender ? (
    <PageToRender routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  );
}
