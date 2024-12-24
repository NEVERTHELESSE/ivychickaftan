import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { cartContext } from "../App";
import { Link } from "react-router-dom";
import SignUpWIthGoogle from "./SignUpWIthGoogle";
export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { api } = useContext(cartContext);

  function register(e) {
    e.preventDefault();
    if (confirmPassword == password) {
      axios
        .post(`${api}createAccount`, {
          username,
          email,
          password,
        })
        .then((res) => console.log(res));
    } else {
      alert("password not match");
    }
  }

  return (
    <div className="flex justify-around p-12 text-white">
      <img className="w-[30rem]" src="/images/cloth1.jpg" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Create Account for Kaftans</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <form className="w-[40%] p-4 bg-primaryColor" onSubmit={register}>
        <p className="text-4xl text-center">Create an Account</p>
        <div className="flex flex-col m-2">
          <label className="text-2xl">Username</label>
          <input
            className="border-primaryColor border text-2xl rounded-lg  py-4 px-3"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder=" "
            required
            minLength={3}
          />
        </div>
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
        <div className="flex flex-col m-2">
          <label className="text-2xl">Confirm Password</label>
          <input
            placeholder=" "
            type="password"
            minLength={6}
            className="border-primaryColor border text-2xl rounded-lg  py-4 px-3"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <SignUpWIthGoogle />
        <div className="flex text-2xl">
          <p>Already have an account? </p>
          <Link to="/login" className="ml-2 text-blue-800 font-bold">
            Login
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
    </div>
  );
}
