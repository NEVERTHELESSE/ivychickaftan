import { lazy, Suspense, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { cartContext } from "../App";
import axios from "axios";
import { cloths } from "../home/cloths";

const ProductNotFound = lazy(() => import("./ProductNotFound"));

export default function SpecificProduct() {
  const [product, setProduct] = useState("loading");
  const [similarProducts, setSimilarProducts] = useState([]);

  const location = window.location.pathname;
  const id = window.location.pathname.split("/")[2];

  const [src, setSrc] = useState([]);
  const { api, currency } = useContext(cartContext);
  const [mainSrc, setMainSrc] = useState("/images/cloth1.jpg");
  const [magnifier, setMagnifier] = useState(false);

  const result = cloths.filter((p) => p.id.toString() == id);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    async function data() {
      await axios
        // .get(`${api}/cloth/${id}`)
        .get(`http://192.168.191.1:9000/api/cloth/${id}`)
        .then((res) => {
          setProduct(res.data.product);
          setSrc(res.data.product.src);
          setMainSrc(res.data.product.src[0]);
          setSimilarProducts(res.data.similarProducts);
        })
        .catch((e) => {
          console.log(e);
          setProduct(null);
        });
    }
    data();
  }, [location]);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function loadInfo(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  }

  return (
    <div className="pt-10 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{result[0].title}</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      {/* {product == "loading" && <p>loading</p>} */}
      {product ? (
        <div>
          <div>
            <div className="flex items-center  justify-center px-20">
              <img
                src={result[0].src[0]}
                className="cursor-zoom-in w-[25rem] mx-5"
                onMouseMove={loadInfo}
                onMouseEnter={() => setMagnifier(true)}
                onMouseLeave={() => setMagnifier(false)}
              />
              <div>
                {src.length > 1 &&
                  src.map((r, i) => (
                    <img
                      key={i}
                      src={r}
                      className={`w-[10rem] my-2 cursor-pointer`}
                      onClick={() => setMainSrc(r)}
                    />
                  ))}
              </div>
              {magnifier ? (
                <div className="flex">
                  <div
                    className="ml-4"
                    style={{
                      left: `${cursorPosition.x - 100}px`,
                      top: `${cursorPosition.y - 100}px`,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      className="h-[30rem] w-[30rem]"
                      style={{
                        background: `url(${mainSrc})`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="ml-4 w-[30rem]">
                  <p className="capitalize text-4xl">{result[0].title}</p>
                  <p className="text-4xl my-4">
                    Our brand is tailored to make women feel beautiful,
                    confident and empowered. We specializes in high fashion
                    luxury kaftan and Bubu dresses.
                  </p>
                  <p className="text-4xl font-bold">
                    {currency}
                    {currency == "₦" && result[0].priceInNaira}
                    {currency == "$" && result[0].priceInDollar}
                    {currency == "€" && result[0].priceInEuro}s
                  </p>
                  <div className="text-white font-bold my-3">
                    <button className="text-2xl bg-tertiaryColor hover:bg-primaryColor py-2 px-8 rounded-full m-3 duration-300">
                      Buy Now
                    </button>
                    <button className="text-2xl bg-primaryColor py-2  px-8 rounded-full hover:bg-tertiaryColor duration-300 ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <NewestCategories title="Similar Products" cloths={similarProducts} /> */}
        </div>
      ) : (
        <Suspense fallback="not found">
          <ProductNotFound />
        </Suspense>
      )}
    </div>
  );
}
