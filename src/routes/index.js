//layouts
import { HeaderOnly } from '~/components/layout';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

//public Route
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/Following', component: Following },
  { path: '/Profile', component: Profile },
  { path: '/Upload', component: Upload, layout: HeaderOnly },
];

// private Route
const privateROutes = [];

export { publicRoutes, privateROutes };
