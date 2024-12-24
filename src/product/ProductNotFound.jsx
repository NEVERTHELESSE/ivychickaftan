import { Link } from "react-router-dom";

function ProductNotFound() {
  const link = "text-3xl text-blue-500 mx-6";

  return (
    <div className=" text-4xl text-center flex justify-around  p-10 items-center">
      <img src="/notFOund.png" className="w-[20rem] mx-4" />
      <div className="w-[50%]">
        <p>Product with the specific id not found! it may be unavailable</p>
        <p>Kindly check our other top products</p>
        <Link to="/" className={link}>
          Home
        </Link>
        <Link to="/shops" className={link}>
          Shops
        </Link>
      </div>
    </div>
  );
}

export default ProductNotFound;
