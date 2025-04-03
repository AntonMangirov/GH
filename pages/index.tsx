import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      {}
      <div style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button>Рассчитать</button>
        <p>Это приложение поможет вам скопить нужную сумму</p>
      </div>
    </Layout>
  );
};

export default Home;