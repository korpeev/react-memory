import { Button } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Home as HomeComponent } from 'components/home';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React memories</title>
      </Head>
      <HomeComponent />
    </>
  );
};

export default Home;
