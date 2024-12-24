import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FaTrash, FaEdit } from "react-icons/fa";
import { cloths } from "../../home/cloths";

export default function Product() {
  const [products, setProducts] = useState(cloths);

  const api = useSelector((state) => state.cart.api);

  const [limit, setLimit] = useState(10);
  // useEffect(() => {
  //   async function data() {
  //     // await axios.get(`${api}product/${limit}`).then((res) => {
  //     await axios
  //       .get(`http://192.168.191.1:9000/api/product${limit}`)
  //       .then((res) => {
  //         setCloths(cloths.concat(res.data));
  //       });
  //   }
  //   data();
  // }, []);

  function deleteProduct(product) {
    const removingProduct = cloths.filter(
      (cloth) => cloth.id != product.id
    );
    setCloths(removingProduct);
  }

  return (
    <div>
      <p className="text-4xl text-center font-bold my-2">All Product</p>
      <div className="flex flex-wrap justify-around">
        {products.map((cloth) => (
          <div
            key={cloth.id}
            className="m-2 hover:scale-105 duration-300 border p-2"
          >
            <img src={cloth.src[0]} className="w-[13rem] " />
            <p className="capitalize mt-3">{cloth.title}</p>
            <p className=" capitalize">
              price in dollar: {cloth.priceInDollar}
            </p>
            <p className=" capitalize">price in naira: {cloth.priceInNaira}</p>
            <p className=" capitalize">price in euro: {cloth.priceInEuro}</p>
            <div className="flex text-3xl  justify-around border-t">
              <FaTrash
                className="text-red-500 hover:text-red-700 cursor-pointer"
                onClick={() => deleteProduct(cloth)}
              />
              <FaEdit />
            </div>
          </div>
        ))}
      </div>
      {/* <ProductEdit /> */}
    </div>
  );
}
