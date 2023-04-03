import Home from '~/pages/Home';
import About from '~/pages/About';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
import Apparel from '~/pages/Apparel/Apparel';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/aboutUs', component: About },
  { path: '/apparel', component: Apparel },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
