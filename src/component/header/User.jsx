import { useContext, useState } from "react";
import { FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { cartContext } from "../../App";
import MyCart from "./mycart/MyCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function User() {
  const { favourite, addProduct, user } = useContext(cartContext);

  const [account, setAccount] = useState(false);

  function userAccount() {
    if (account) {
      alert("account");
    } else {
      window.location.replace("/login");
    }
  }

  const currencies = ["usd", "ngn", "eur"];
  const price = useSelector((state) => state.cart.price);

  const { currency, setCurrency } = useContext(cartContext);

  function changeCurrency(e) {
    const value = e.target.value;
    if (value == "ngn") {
      setCurrency("₦");
    } else if (value == "usd") {
      setCurrency("$");
    } else if (value == "eur") {
      setCurrency("€");
    }
  }

  return (
    <div className="flex w-[100%]  md:w-[80%]  fsc:w-[40%]  ffc:bg-blue-400  items-center justify-around ">
      <span>|</span>
      <select
        onChange={changeCurrency}
        name="currency"
        id="currency"
        className="uppercase fsc:text-2xl bg-transparent border rounded-lg py-2 smpy-1 p-1 fsc:px-4"
      >
        {currencies.map((currency, i) => (
          <option key={i}>{currency}</option>
        ))}
      </select>

      <MyCart />
      <div className="relative">
        {favourite !== 0 && (
          <sup className="absolute  top-0 text-white font-bold right-0 bg-red-500 rounded-full p-2">
            {favourite}
          </sup>
        )}
        <Link to="/wishlist">
          <abbr title="Wishlist">
            <div className="border cursor-pointer rounded-full p-2 sm:text-2xl">
              <FiHeart />
            </div>
          </abbr>
        </Link>
      </div>
      <div className="relative">
        <abbr title={user ? user.username : "Login to view your profile"}>
          {user ? (
            <img
              src={user.profileUrl}
              className="rounded-full size-[1.8rem] sm:size-[2.5rem] bg-secondaryColor border"
            />
          ) : (
            <div
              className="border cursor-pointer rounded-full p-2 sm:text-2xl"
              onClick={userAccount}
            >
              <FiUser />
            </div>
          )}
        </abbr>
      </div>
      <span>|</span>
      <div>
        <p className="font-bold ">
          {currency}
          {price}
        </p>
      </div>
    </div>
  );
}

export default User;
