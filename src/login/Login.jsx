import { useContext, useState } from "react";
import { Helmet } from "react-helmet";

import axios from "axios";
import { cartContext } from "../App";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { api } = useContext(cartContext);

  function register(e) {
    e.preventDefault();
    axios
      .post(`${api}login`, {
        email,
        password,
      })
      .then((res) => console.log(res));
  }

  return (
    <div className="flex items-center justify-around p-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Log in to your Kaftans Account</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <form
        className="w-[40%] bg-primaryColor p-4 rounded-lg"
        onSubmit={() => register}
      >
        <p className="text-3xl text-center font-bold">Login to Kaftans</p>
        <div className="flex flex-col m-2">
          <label className="text-2xl">Email Address</label>
          <input
            className="border-primaryColor border text-2xl rounded-lg  py-4 px-3"
            placeholder=" "
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col m-2">
          <label className="text-2xl">Password</label>
          <input
            className="border-primaryColor border text-2xl rounded-lg  py-4 px-3"
            placeholder=" "
            type="password"
            required
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex text-2xl">
          <p>Don't have an account </p>
          <Link to="/register" className="ml-2 text-blue-700 font-bold">
            Create One
          </Link>
        </div>

        <div className="text-center my-4">
          <button
            type="submit"
            className="bg-black text-2xl text-white rounded-lg py-2 px-8"
          >
            Register
          </button>
        </div>
      </form>
      <img className="w-[30rem]" src="/images/cloth5.jpg" />
    </div>
  );
}
