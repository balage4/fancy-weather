import City from "../../pages/City";
import Home from "../../pages/Home";

const routes = [
  {
    path: '/city/:cityname',
    name: 'City',
    element: City,
    topMenu: false
  },
  {
    path: '/',
    name: 'Form',
    element: Home,
    topMenu: true
  },
  {
    path: '/*',
    name: 'Home',
    element: Home,
    topMenu: false
  },

];



export default routes;
