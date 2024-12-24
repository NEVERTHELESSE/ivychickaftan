import { useContext, useEffect, useState } from "react";
import { FiHeart, FiShoppingBag, FiShoppingCart } from "react-icons/fi";

import { cartContext } from "../../App";
import { Link } from "react-router-dom";
import ClothLoading from "./ClothLoading";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { update } from "../../redux/cartSlice";

export default function NewestCategories(props) {
  const [show, setShow] = useState(3);

  const {
    setFavourite,
    addProduct,
    setAddProduct,
    currency,
    favourite,
    setPrice,
  } = useContext(cartContext);

  function addToCart(r) {
    setAddProduct((prev) => [...prev, r]);
    enqueueSnackbar("Product has been successfully added to cart", {
      variant: "success",
    });
  }
  const dispatch = useDispatch();
  useEffect(() => {
    let sum = 0;
    if (currency == "$") {
      addProduct.forEach((r) => (sum += r.priceInDollar));
      dispatch(update({ price: sum }));
      setPrice(sum);
    } else if (currency == "₦") {
      addProduct.forEach((r) => (sum += r.priceInNaira));
      dispatch(update({ price: sum.toLocaleString() }));
    } else if (currency == "€") {
      addProduct.forEach((r) => (sum += r.priceInEuro));
      dispatch(update({ price: sum.toLocaleString() }));
    }
  }, [addProduct, currency]);

  function addToFavourite(id) {
    setFavourite(favourite + 1);
  }

  return (
    <div className="relative  w-full p-4 grid place-items-center  ">
      <p className="text-3xl   text-center capitalize swipe">{props.title}</p>
      <div className="sm:p-[3rem]  items-center relative justify-around flex flex-wrap ">
        {props.cloths.map((cloth, index) => {
          return (
            <div
              className="rounded-lg sm:rounded-3xl relative shadow-lg shadow-secondaryColor my-1 sm:text-2xl  text-center w-[10rem] sm:w-[15rem] md:w-[25rem] overflow-hidden sm:m-2"
              key={index}
              onMouseEnter={() => setShow(index)}
              onMouseLeave={() => setShow(null)}
            >
              <Link to={`/cloth/${cloth.id}`}>
                <img
                  src={cloth.src[0]}
                  alt="cloth"
                  className="bg-primaryColor  duration-1000 w-full h-[20] sm:h-[32rem] rounded-t-lg  sm:rounded-t-3xl  cursor hover:scale-105"
                  style={{
                    zIndex: -4,
                  }}
                />
              </Link>
              <p className="p-2  text-center border-b sm:text-3xl">
                {currency}
                {currency == "$" && cloth.priceInDollar.toLocaleString()}
                {currency == "₦" && cloth.priceInNaira.toLocaleString()}
                {currency == "€" && cloth.priceInEuro.toLocaleString()}
              </p>
              <p className="my-1 capitalize  sm:text-2xl sm:font-bold">
                {cloth.title}
              </p>
              {show == index && (
                <div className="rounded-3xl  absolute top-0 left-0 z-40 bg-white text-black   flex flex-col text-2xl justify-center items-center shadow ">
                  <abbr
                    className="p-4 cursor-pointer duration-700 hover:bg-secondaryColor rounded-t-3xl"
                    onClick={() => addToFavourite(cloth.id)}
                    title={`add ${cloth.title} to wishlist`}
                  >
                    <FiHeart size={30} />
                  </abbr>
                  <abbr
                    className="p-4 cursor-pointer duration-700 hover:bg-secondaryColor "
                    title={`add ${cloth.title} to cart`}
                  >
                    <FiShoppingCart
                      size={30}
                      onClick={() => addToCart(cloth)}
                    />
                  </abbr>
                  <abbr
                    className="p-4 cursor-pointer duration-700 hover:bg-secondaryColor rounded-b-3xl"
                    title={`shop ${cloth.title}`}
                  >
                    <FiShoppingBag size={30} />
                  </abbr>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {props.loading && (
        <div className="flex flex-wrap justify-center">
          <ClothLoading />
        </div>
      )}
    </div>
  );
}
