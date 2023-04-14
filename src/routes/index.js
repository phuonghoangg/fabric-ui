import Home from '~/pages/Home';
import About from '~/pages/About';
import Service from '~/pages/Service';
import Contact from '~/pages/Contact';
import Apparel from '~/pages/Apparel/Apparel';
import Admin from '~/pages/Admin/Admin';
import BlogPage from '~/pages/BlogPage/BlogPage';
import BlogDetail from '~/pages/BlogPage/BlogDetail';
import ApparelDetail from '~/pages/Apparel/ApparelDetail';
import bla from '~/pages/bla/bla';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/aboutUs', component: About },
  { path: '/apparel', component: Apparel },
  { path: '/apparel/:id', component: ApparelDetail },
  { path: '/service', component: Service },
  { path: '/contact', component: Contact },
  { path: '/blog', component: BlogPage },
  { path: '/blog/:id', component: BlogDetail },
  { path: '/admin', component: Admin },
  { path: '/bla', component: bla },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
