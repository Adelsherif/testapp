import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Helmet>
        <title>الرئيسية - شقق للبيع</title>
        <meta name="description" content="صفحة الشقق المعروضة للبيع" />
        <meta property="og:title" content="الرئيسية - شقق للبيع" />
        <meta property="og:description" content="صفحة الشقق المعروضة للبيع" />
        <meta property="og:image" content="https://i.pinimg.com/736x/e2/92/d4/e292d40d8adedec48521b9602dc89734.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>مرحباً بك في موقع الشقق</h1>
      <ul>
        <li><Link to="/shap/1">شقة 1</Link></li>
        <li><Link to="/shap/2">شقة 2</Link></li>
        <li><Link to="/shap/3">شقة 3</Link></li>
      </ul>
    </div>
  );
}

export default Home;
