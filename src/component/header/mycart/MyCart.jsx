import { lazy, Suspense, useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { cartContext } from "../../../App";
import LoadingSpinner from "../../../loading/LoadingSpinner";

const Details = lazy(() => import("./Details"));

export default function MyCart() {
  const { addProduct } = useContext(cartContext);

  const [showCart, setShowCart] = useState(false);

  function addToCart() {
    setShowCart((prev) => !prev);
  }

  const newCart = addProduct.length;

  return (
    <div className="relative">
      {newCart !== 0 && (
        <sup className="absolute top-0 text-white font-bold right-0 bg-red-500 rounded-full p-2">
          {newCart}
        </sup>
      )}
      <button onClick={addToCart} className="flex items-center">
        <abbr title="My Cart">
          <div className="border cursor-pointer rounded-full p-2 sm:text-2xl">
            <FiShoppingCart />
          </div>
        </abbr>
      </button>
      {showCart && (
        <Suspense fallback={<LoadingSpinner />}>
          <Details setshowcart={setShowCart} />
        </Suspense>
      )}
    </div>
  );
}
