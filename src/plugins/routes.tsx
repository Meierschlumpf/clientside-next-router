import { PluginAPage } from './pages/plugin-a';
import { PluginBPage } from './pages/plugin-b';

export const getRoutes = (createRoute: (options: any) => any) => {
  return [
    createRoute({
      path: '/plugin-a',
      component: PluginAPage,
    }),
    createRoute({
      path: '/plugin-b',
      component: PluginBPage,
    }),
  ];
};

export const getMetaTags = () => {
  return {
    '/plugin-a': {
      title: 'Plugin A',
      description: '',
      image: '',
      tags: [],
    },
    '/plugin-b': {
      title: 'Plugin B',
      description: '',
      image: '',
      tags: [],
    },
  };
};
