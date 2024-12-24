import { lazy, Suspense,useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useSelector } from "react-redux";
import { cloths } from "./cloths";

const Features = lazy(() => import("./features/Features"));
const FirstIntroduction = lazy(
  () => import("./firstIntroduction/FirstIntroduction")
);
const ClothLoading = lazy(() => import("./newestCategory/ClothLoading"));
const Promo = lazy(() => import("./promo/Promo"));
const NewestCategory = lazy(() => import("./newestCategory/NewestCategories"));
const Join = lazy(() => import("./join/Join"));
const TopCollection = lazy(() => import("./topCollection/TopCollection"));
const Advert = lazy(() => import("./advert/Advery"));

export default function Home() {
  const [limit, setLimit] = useState(0);

  // const [cloths, setCloths] = useState([]);
  const allCloth = cloths.slice(0, limit + 6);
  const [loading, setLoading] = useState(false);
  const [max, setMax] = useState(30);

  function loadMore() {
    setLoading(true);
    setTimeout(() => {
      setLimit((prev) => prev + 6);
      setLoading(false);
    }, 1000);
  }

  // useEffect(() => {
  //   async function data() {
  //     // await axios.get(`${api}product/${limit}`)
  //     await axios.get("http://192.168.191.1:9000/api/insert").then((res) => {
  //       setCloths(cloths.concat(res.data));
  //     });
  //   }
  //   data();
  // }, [limit]);

  useEffect(() => {
    async function getMax() {
      await axios
        .get(`http://localhost:9000/api/clothMax`)
        .then((res) => setMax(Number(res.data)));
    }
    getMax();
  }, []);

  const api = useSelector((state) => state.cart.api);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ivychikaftan</title>
        <link rel="canonical" href="http://localhost:5173/" />
      </Helmet>
      <Suspense
        fallback={
          <div className="flex flex-wrap justify-around">
            <ClothLoading />
          </div>
        }
      >
        <FirstIntroduction />
        <Features />
        <Promo />
        <NewestCategory
          title="newest collection
            "
          cloths={allCloth}
          loading={loading}
        />
        {max > limit && (
          <div className="flex justify-center">
            <button
              className="border py-2 border-primaryColor shadow  px-6 rounded-lg w-[10rem]"
              onClick={loadMore}
            >
              More Products
            </button>
          </div>
        )}
        <TopCollection />
        <Join />
        <Advert />
      </Suspense>
    </div>
  );
}
