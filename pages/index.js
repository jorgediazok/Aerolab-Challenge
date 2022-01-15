import Head from 'next/head';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aerolab Store</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Header />
    </div>
  );
}
