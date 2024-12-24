import { useContext, useRef } from "react";
import { cartContext } from "../../../App";

import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";

function Details({ setshowcart }) {
  function cancel() {
    menuRef.current.classList.add("remove");
    setTimeout(() => {
      setshowcart(false);
    }, 300);
  }

  const { addProduct } = useContext(cartContext);

  const menuRef = useRef(null);

  return (
    <div className="w-[100vw] h-[100vh]  left-0 fixed flex  z-[100]  cover ">
      <div className="w-[calc(100vw-25rem)]  h-full " onClick={cancel}></div>
      <div
        className="w-[30rem]   duration-500 bg-white h-full  shadow border new overflow-y-auto"
        ref={menuRef}
      >
        {addProduct.length == 0 ? <EmptyCart /> : <CartItems />}
      </div>
    </div>
  );
}

export default Details;
