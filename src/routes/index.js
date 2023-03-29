import { SettingLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import About from '~/pages/About';
import Service from '~/pages/Service';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/aboutUs', component: About },
  { path: '/service', component: Service },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
