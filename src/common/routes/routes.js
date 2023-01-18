import City from "../../pages/City";
import Home from "../../pages/Home";

const routes = [
  {
    path: '/',
    name: 'Home',
    element: Home,
    topMenu: true
  },
  {
    path: '/city/:cityname',
    name: 'City',
    element: City,
    topMenu: false
  }
];



export default routes;
