import { Button } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../layouts/main';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React memories</title>
      </Head>
      <MainLayout>
        <Button>Hello</Button>
      </MainLayout>
    </>
  );
};

export default Home;
