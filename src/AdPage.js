import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ads = {
  1: { title: "شقة 1", description: "شقة للبيع 1", image: "https://via.placeholder.com/300" },
  2: { title: "شقة 2", description: "شقة للبيع 2", image: "https://via.placeholder.com/300" },
  3: { title: "شقة 3", description: "شقة للبيع 3", image: "https://via.placeholder.com/300" },
};

function AdPage() {
  const { id } = useParams();
  const ad = ads[id];

  if (!ad) return <h2>الإعلان غير موجود</h2>;

  return (
    <div>
      <Helmet>
        <title>{ad.title}</title>
        <meta property="og:title" content={ad.title} />
        <meta property="og:description" content={ad.description} />
        <meta property="og:image" content={ad.image} />
        <meta property="og:url" content={`https://<username>.github.io/testapp/#/shap/${id}`} />
      </Helmet>
      <h1>{ad.title}</h1>
      <p>{ad.description}</p>
      <img src={ad.image} alt={ad.title} />
    </div>
  );
}

export default AdPage;
