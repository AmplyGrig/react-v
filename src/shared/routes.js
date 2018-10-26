import home from "./components/home";
import login from "./components/login";
import registration from "./components/Registration";
import Itemlist from "./components/Itemlist";
import notfound from "./components/notfound";


const routes =  [
  {
    path: '/',
    exact: true,
    component: home
  },
  {
    path: '/login',
    component: login
  },
  {
      path: '/registration',
      component: registration
  },
  {
      path: '/items',
      component: Itemlist
  },
  {
    path: '',
    component: notfound
  }
]

export default routes