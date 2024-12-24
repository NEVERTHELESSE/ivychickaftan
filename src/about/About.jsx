import { Helmet } from "react-helmet";
import {
  FaChessBoard,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../component/heading/Heading";

export default function About() {
  const follows = [
    {
      id: 1,
      icon: (
        <FaInstagram className="border-2 rounded-lg p-1 border-primaryColor mx-3" />
      ),
      to: "https://www.instagram.com/ivychickaftan",
    },
    {
      id: 2,
      icon: (
        <FaTiktok className="border-2 rounded-lg p-1 border-primaryColor mx-3" />
      ),
      to: "https://www.tiktok.com/@ivychic_kaftan",
    },
    {
      id: 3,
      icon: (
        <FaEnvelope className="border-2 rounded-lg p-1 border-primaryColor mx-3" />
      ),
      to: "https://:mailto:neverthelesse21@gmail.com",
      // to: "https://mail.google.com/mail/u/1/?ogbl#inbox?compose=new",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About-Us </title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <Heading title="About Us" />
      <div className="p-20 flex justify-around">
        <img src="/newlogo.jpg" className="h-[30rem] w-[30rem] object-cover" />
        <div className="w-[50%]">
          <p className="text-6xl underline my-4">About Kaftans</p>
          <p className="border-b">
            Welcome to Ivy Chic Kaftan, where elegance meets effortless luxury.
            Our brand is dedicated to redefining timeless style with our
            exquisite collection of kaftans and bubu dresses. Designed for the
            modern woman who values comfort, sophistication, and individuality,
            our pieces are a celebration of heritage and contemporary flair.
            Each design is crafted with the finest fabrics and meticulous
            attention to detail, ensuring a perfect blend of beauty and
            functionality. Whether you're lounging at home, attending a special
            event, or exploring exotic destinations, Ivy Chic Kaftan offers
            versatile statement pieces that embody grace and confidence. At Ivy
            Chic Kaftan, we believe in empowering women to express their unique
            essence through fashion that feels as good as it looks. Step into a
            world of refined elegance—step into Ivy Chic Kaftan.
          </p>
          <p className="text-2xl my-2">Follow Us On.</p>
          <div className="flex text-5xl">
            {follows.map((follow) => (
              <Link to={follow.to} key={follow.id}>
                {follow.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
