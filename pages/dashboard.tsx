import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from 'layout';

const Dashboard: NextPage = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    return push('/login');
  };
  return (
    <Layout>
      <button onClick={handleLogin}>giriş yap</button>
    </Layout>
  );
};

export default Dashboard;