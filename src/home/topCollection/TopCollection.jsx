import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { settings } from "./collectionSettings";
import axios from "axios";
import { useSelector } from "react-redux";

export default function TopCollection() {
  const [products, setProducts] = useState([]);

  const api = useSelector((state) => state.cart.api);

  useEffect(() => {
    async function data() {
      await axios.get(`${api}product/3`).then((res) => setProducts(res.data));
    }
    data();
  }, []);

  return (
    <div className="my-10 mx-[20rem]  border-2 rounded-lg">
      <p className="text-4xl text-center m-10">Top Collection</p>
      <div className="slider-container">
        <Slider {...settings}>
          {products?.map((product) => (
            <Link
              to={`/cloth/${product.id}`}
              key={product.id}
              className="w-[25rem] h-[34rem] overflow-hidden bg-blue-40 p-2"
            >
              <img src={product.src[0]} className="w-full h-full" />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
