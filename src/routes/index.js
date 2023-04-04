import Home from '~/pages/Home';
import About from '~/pages/About';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
import Apparel from '~/pages/Apparel/Apparel';
import Admin from '~/pages/Admin/Admin';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/aboutUs', component: About },
  { path: '/apparel', component: Apparel },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
  { path: '/admin', component: Admin },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
