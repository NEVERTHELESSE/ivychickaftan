import { useContext } from "react";
import { cartContext } from "../../../App";
import { useSelector } from "react-redux";

export default function CartItems() {
  const { addProduct, currency, setAddProduct } = useContext(cartContext);

  const price = useSelector((state) => state.cart.price);

  function addToCart(r) {
    setAddProduct((prev) => [...prev, r]);
  }
  function removeFromCart(r) {
    const checkId = addProduct.filter((p) => p.id == r.id);
    if (checkId.length > 1) {
      const duplicate = addProduct.filter((p) => p.id != r.id);
      const firstProduct = addProduct.filter(
        (p) => p.id == r.id
      );
      firstProduct.pop();
      setAddProduct([...firstProduct, ...duplicate]);
    } else {
      removeProduct(r);
    }
  }

  function removeProduct(product) {
    const newProduct = addProduct.filter(
      (r) => r.id != product.id
    );
    setAddProduct(newProduct);
  }
  const removeProductDuplicate = addProduct.filter(
    (product, index, self) =>
      self.indexOf(product) == index
  );
  return (
    <div>
      {removeProductDuplicate.map((r, index) => (
        <div key={index} className="flex items-center relative border-b">
          <img src={r.src[0]} className="w-[10rem] m-2" />
          <div>
            <p className="text-2xl my-2 font-bold">
              {currency}
              {currency == "$" && r.priceInDollar.toLocaleString()}
              {currency == "₦" && r.priceInNaira.toLocaleString()}
              {currency == "€" && r.priceInEuro.toLocaleString()}
            </p>
            <p className="my-2 capitalize italic">category: {r.category}</p>
            <p className="capitalize"> {r.title}</p>
            <div className="flex border rounded-full items-center justify-around my-4  overflow-hidden ">
              <button
                className="bg-black text-white text-2xl p-2 px-4 font-bold hover:bg-red-500 duration-500  "
                onClick={() => removeFromCart(r)}
              >
                -
              </button>

              <p className="mx-4">
                {addProduct.filter((p) => p.id == r.id).length}
              </p>
              <button
                className="bg-black text-white text-2xl py-2 px-4 font-bold hover:bg-green-500 duration-500"
                onClick={() => addToCart(r)}
              >
                +
              </button>
            </div>
          </div>
          <p
            className="text-red-500 font-bold absolute right-5 top-1 text-3xl cursor-pointer hover:text-red-700 duration-500"
            onClick={() => removeProduct(r)}
          >
            X
          </p>
        </div>
      ))}
      <p className="text-3xl my-2 text-center">
        Total
        <b>
          {currency}: {price}
        </b>
      </p>
      <div className="w-full flex justify-center my-2">
        <button className="bg-green-400 text-white font-bold text-2xl py-2 px-6 rounded-full m-2 hover:bg-green-700 duration-1000 mb-20">
          Proceed with Payment
        </button>
      </div>
    </div>
  );
}
