import React from 'react';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>صفحة الرئيسية</title>
        <meta property="og:title" content="صفحة الرئيسية" />
        <meta property="og:description" content="وصف الصفحة الرئيسية" />
        <meta property="og:image" content="https://adelsherif.github.io/testapp/og-home.png" />
      </Helmet>
      <h1>Home Page</h1>
    </>
  );
}

export default Home;
