import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const adsData = {
  1: { title: "شقة 1 للبيع", image: "https://link-to-image1.jpg" },
  2: { title: "شقة 2 للبيع", image: "https://link-to-image2.jpg" },
  3: { title: "شقة 3 للبيع", image: "https://link-to-image3.jpg" }
};

export default function AdPage() {
  const { id } = useParams();
  const ad = adsData[id];

  return (
    <div>
      <Helmet>
        <title>{ad?.title || "إعلان"}</title>
        <meta property="og:title" content={ad?.title || "إعلان"} />
        <meta property="og:image" content={ad?.image || ""} />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1>{ad?.title}</h1>
      <img src={ad?.image} alt={ad?.title} />
    </div>
  );
}
