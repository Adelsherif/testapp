import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const adData = {
  1: { title: "شقة للبيع 1", description: "شقة رائعة في القاهرة", image: "https://via.placeholder.com/600x400?text=Ad+1" },
  2: { title: "شقة للبيع 2", description: "شقة رائعة في الإسكندرية", image: "https://via.placeholder.com/600x400?text=Ad+2" },
  3: { title: "شقة للبيع 3", description: "شقة رائعة في الجيزة", image: "https://via.placeholder.com/600x400?text=Ad+3" },
};

function AdPage() {
  const { id } = useParams();
  const ad = adData[id] || { title: "شقة غير موجودة", description: "هذا الإعلان غير موجود", image: "https://via.placeholder.com/600x400?text=Not+Found" };

  return (
    <div>
      <Helmet>
        <title>{ad.title}</title>
        <meta name="description" content={ad.description} />
        {/* Open Graph */}
        <meta property="og:title" content={ad.title} />
        <meta property="og:description" content={ad.description} />
        <meta property="og:image" content={ad.image} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>{ad.title}</h1>
      <p>{ad.description}</p>
      <img src={ad.image} alt={ad.title} style={{ maxWidth: "100%" }} />
    </div>
  );
}

export default AdPage;
