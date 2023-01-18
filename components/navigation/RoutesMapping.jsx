import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../common/routes/routes';

const RoutesMapping = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, i) => (
        <Route
          key={`clientRoute_${i}`}
          path={route.path}
          element={<route.element />}
        />
      ))}
    </Routes>
  </BrowserRouter>
);

export default RoutesMapping;
