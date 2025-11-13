import React from 'react';
import { Helmet } from 'react-helmet-async';

function AdPage({ id }) {
  return (
    <>
      <Helmet>
        <title>صفحة الإعلان {id}</title>
        <meta property="og:title" content={`صفحة الإعلان ${id}`} />
        <meta property="og:description" content={`وصف الإعلان ${id}`} />
        <meta property="og:image" content={`https://adelsherif.github.io/testapp/og-${id}.png`} />
      </Helmet>
      <h1>Ad Page {id}</h1>
    </>
  );
}

export default AdPage;
