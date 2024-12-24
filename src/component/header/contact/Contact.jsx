import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <a
      className=" bg-primaryColor border right-3 z-[30] size-[4rem] rounded-full grid place-items-center fixed bottom-5 cursor-pointer hover:bg-secondaryColor duration-700"
      style={{
        zIndex: 20,
      }}
      href="https://web.whatsapp.com"
      //http://web.whatsapp.com/send?phone=999d99&txt=message
      //+1 443-699-8766
    >
      <FaWhatsapp size={40} color="white" />
    </a>
  );
}
