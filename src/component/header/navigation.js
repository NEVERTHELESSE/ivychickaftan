import { FaBlenderPhone, FaHeart, FaHome, FaPlusSquare, FaQuestionCircle, FaShieldAlt, FaStore, FaUser, FaUserAlt, FaUserCheck } from "react-icons/fa";
 
export const navigation= [
  {
    id: 1,
    name: "home",
    link: "/",
    src: '/navigation/home.png',
    active: '',
    icon: FaHome ,

  },
  {
    id: 2,
    name: "shops",
    link: "/shops",
    src: '/navigation/shop.png',
    active: 'shops',
    icon: FaStore ,


  },
  {
    id: 3,
    name: "about us",
    link: "/about-us",
    src: '/navigation/about.png',
    active: 'about-us',
    icon: FaPlusSquare ,


  },
  {
    id: 4,
    name: "contact us",
    link: "/contact-us",
    src: '/navigation/contact.png',
    active: 'contact-us',
    icon: FaBlenderPhone ,

  },
  {
    id: 5,
    name: "wishlist",
    link: "/wishlist",
    src: '/navigation/wishlist.png',
    active: 'wishlist',
    icon: FaHeart ,


  },
  {
    id: 6,
    name: "faq",
    link: "/faq",
    src: '/navigation/faq.png',
    active: 'faq',
    icon: FaQuestionCircle,


  },
  {
    id: 7,
    name: "login",
    link: "/login",
    src: '/navigation/login.png',
    active: 'login',
    icon: FaUserCheck ,


  },
  {
    id: 8,
    name: "register",
    link: "/register",
    src: '/navigation/register.png',
    active: 'register',
    icon: FaUser ,

  },
  {
    id: 9,
    name: "privacy&policy",
    link: "/Privacy&Policy",
    src: '/navigation/register.png',
    active: 'privacy-policy',
    icon: FaShieldAlt ,

  },
];