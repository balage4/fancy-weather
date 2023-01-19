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
    name: 'Home',
    element: Home,
    topMenu: true
  },

];



export default routes;
