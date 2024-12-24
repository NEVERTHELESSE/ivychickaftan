import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";

export default function ClothMap() {
  const { currency } = useContext(cartContext);

  return (
    <div className="p-[3rem]  items-center relative justify-center flex flex-wrap ">
      {props.cloths.map((cloth, index) => {
        return (
          <div
            className="rounded-3xl relative shadow-lg shadow-secondaryColor text-2xl  text-center  w-[25rem] overflow-hidden m-4"
            key={index}
            onMouseEnter={() => setShow(index)}
            onMouseLeave={() => setShow(null)}
          >
            <Link to={`/cloth/${cloth.id}`}>
              <img
                src={cloth.src[0]}
                alt="cloth"
                className="bg-primaryColor  duration-1000 w-full h-[32rem]  rounded-t-3xl  cursor hover:scale-105"
                style={{
                  zIndex: -4,
                }}
              />
            </Link>
            <p className="p-2  text-center border-b ">
              {currency}
              {currency == "$" && cloth.priceInDollar}
              {currency == "₦" && cloth.priceInNaira}
              {currency == "€" && cloth.priceInEuro}
            </p>
            <p className="my-1 capitalize">{cloth.title}</p>
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
                  <FiShoppingCart size={30} onClick={() => addToCart(cloth)} />
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
  );
}
