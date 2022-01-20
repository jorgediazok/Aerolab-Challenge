import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import HeroCards from '../components/HeroCards/HeroCards';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';

export default function Home({ products, user, history, redeem, points }) {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Aerolab Store</title>
        <meta
          name='Aerolab Store'
          content='E-Commerce created with Next Js. We Sell all kind of electronic products for your home'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Header
        user={user}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        history={history}
        redeem={redeem}
        points={points}
      />
      <Hero />
      <HeroCards />
      <Products
        products={products}
        user={user}
        loading={loading}
        setLoading={setLoading}
        totalProducts={products.length}
        points={points}
        history={history}
      />
      <Footer />
    </Layout>
  );
}

//GET PRODUCTS, USER & HISTORY - POST POINTS & REDEEMS

export async function getServerSideProps({ amount, productId }) {
  const res = await fetch('https://coding-challenge-api.aerolab.co/products', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
  });

  const resUser = await fetch(
    'https://coding-challenge-api.aerolab.co/user/me',
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  const resHistory = await fetch(
    'https://coding-challenge-api.aerolab.co/user/history',
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    }
  );

  const products = await res.json(); //GET
  const user = await resUser.json(); //GET
  const history = await resHistory.json(); //GET

  return { props: { products, user, history } };
}
