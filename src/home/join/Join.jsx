import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function () {
  const [email, setEmail] = useState("");

  async function getInfomation(e) {
    e.preventDefault();
    axios.post("", { email }).then((res) => console.log(res.data));
    enqueueSnackbar(
      "Successfully registered!!, you will get update about our latest product in your mail",
      {
        variant: "success",
      }
    );
  }

  function setEmailValue(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="flex w-full border-y p-20 my-8">
      <div className="border w-[50%] flex flex-col justify-center items-center text-center">
        <h2 className="text-6xl">Join Our Newsleter</h2>
        <p className="text-2xl my-2">
          Get information in your email for all the news, about our latest and
          get an excellent early access shopping
        </p>
        <form className=" w-full flex justify-center" onSubmit={getInfomation}>
          <input
            placeholder="Your email address"
            className="border p-6 w-[25rem] rounded-full"
            onChange={setEmailValue}
            type="email"
            required
          />
          <button
            type="submit"
            className="bg-black ml-4 text-white px-8 py-2 rounded-full"
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div className="text-center w-[50%] flex flex-col">
        <h2 className="text-6xl">About Us</h2>
        <p className="text-2xl">
          Kaftans is more than just a name. Our brand is tailor to make women
          feel beautify, confident and empowered. We specialize in quality, High
          Fashion, Luxury Bubu dresses and Kaftans
        </p>
        <div className="my-8 ">
          <Link
            to="/about-us"
            className="bg-black py-4 px-8 rounded-full  text-white"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
