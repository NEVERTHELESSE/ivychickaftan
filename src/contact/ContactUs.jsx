import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { cartContext } from "../App";
import Heading from "../component/heading/Heading";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const { api } = useContext(cartContext);

  function submitQuestion(e) {
    e.preventDefault();
    axios
      .post(`${api}question`, {
        username,
        email,
        number,
        company,
        message,
      })
      .then((res) => {
        alert(
          "Your message have been deliver successfully!!, you will get a reply within 24 hours, thanks for contacting kaftans"
        );
        window.location.replace("/");
      });
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact-Us</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <Heading title="contact us" />
      <div className="p-20">
        <p className="text-4xl font-bold text-center">
          Kindly fill all the field and drop your message, Your message will be
          reply within 24hours
        </p>
        <form className="my-3 px-[10rem] text-2xl" onSubmit={submitQuestion}>
          <div className=" columns-2">
            <div className="flex flex-col">
              <label>Your Name</label>
              <input
                className="border-primaryColor border text-2xl rounded-lg  py-2 px-8"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Your Email</label>
              <input
                className="border border-primaryColor text-2xl rounded-lg  py-2 px-8"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Your Phone Number</label>
              <input
                className="border border-primaryColor text-2xl rounded-lg  py-2 px-8"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>Your Company Name</label>
              <input
                className="border border-primaryColor text-2xl rounded-lg  py-2 px-8"
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Your Message</label>
            <textarea
              className="border border-primaryColor rounded-lg p-4 text-2xl"
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center my-4">
            <button
              type="submit"
              className="bg-black text-2xl text-white rounded-lg py-2 px-8"
            >
              Ask a Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
