import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Heading from "../component/heading/Heading";
import ClothLoading from "../home/newestCategory/ClothLoading";
import { useSelector } from "react-redux";
import { cloths } from "../home/cloths";

const NewestCategories = lazy(
  () => import("../home/newestCategory/NewestCategories")
);

const CategoryNotFound = lazy(() => import("./CategoryNotFound"));
const LoadingSpinner = lazy(() => import("../loading/LoadingSpinner"));

export default function Category() {
  const location = window.location.search;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const category = location.split("?")[1];

  const api = useSelector((state) => state.cart.api);

  useEffect(() => {
    setLoading(false);
    const filter = cloths.filter((p) => p.category === category);
    setProducts(filter);
    // async function data() {
    //   await axios
    //     .post(`${api}/products`, {
    //       category,
    //     })
    //     .then((res) => {
    //       setProducts(res.data);
    //       setLoading(false);
    //     });
    // }
    // data();
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{category}</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <Heading title={category} />
      <Suspense
        fallback={
          <div className="flex flex-wrap justify-around">
            <ClothLoading />
          </div>
        }
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {products.length > 1 ? (
              <NewestCategories title="kaftans products" cloths={products} />
            ) : (
              <CategoryNotFound category={category} />
            )}
          </div>
        )}
      </Suspense>
    </div>
  );
}
