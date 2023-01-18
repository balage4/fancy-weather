import Layout from '../components/layout/Layout';
import RoutesMapping from '../components/navigation/RoutesMapping';
import './App.scss';

function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <RoutesMapping />
    </Layout>
  );
}

export default App;
