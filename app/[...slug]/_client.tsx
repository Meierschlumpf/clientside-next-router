'use client';

import { createReactRouter, createRouteConfig, Outlet, Router, RouterProvider } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
const importLoader = async (path: string) => {
  return (await import(`../../src/${path}/routes`)).getRoutes;
};

let router: Router | undefined = undefined;

(async () => {
  const loader = await importLoader('plugins');
  const routeConfig = createRouteConfig().createChildren((createRoute) => [...loader(createRoute)]);
  router = createReactRouter({
    routeConfig,
  }) as Router;
})();

export const ClientComponent = () => {
  const [router, setRouter] = useState<Router>();

  useEffect(() => {
    (async () => {
      const loader = await importLoader('plugins');
      const routeConfig = createRouteConfig().createChildren((createRoute) => [...loader(createRoute)]);
      setRouter(
        createReactRouter({
          routeConfig,
        }) as Router
      );
    })();
  }, []);

  if (!router) return <p>Loading...</p>;

  return (
    <RouterProvider router={router as unknown as any}>
      <Outlet />
    </RouterProvider>
  );
};
