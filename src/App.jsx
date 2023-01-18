import Layout from './components/layout/Layout';
import Sidebar from './components/layout/SideBar';
import RoutesMapping from './components/navigation/RoutesMapping';
import './App.scss';

const App = () => (
  <Layout sidebar={<Sidebar />}>
    <RoutesMapping />
  </Layout>
);

export default App;
