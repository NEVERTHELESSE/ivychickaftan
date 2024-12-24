import { useContext } from "react";
import { cartContext } from "../App";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";

export default function MyShop() {
  const { addProduct, setAddProduct, currency } = useContext(cartContext);

  function removeProduct(product) {
    enqueueSnackbar("product have been remove from cart", {
      variant: "warning",
    });
    const newProduct = addProduct.filter(
      (r) => r.id != product.id
    );
    setAddProduct(newProduct);
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

  function addToCart(r) {
    setAddProduct((prev) => [...prev, r]);
    console.log("added");
  }

  const removeProductDuplicate = addProduct.filter(
    (product, index, self) =>
      self.indexOf(product) == index
  );

  return (
    <div className="w-full min-h-[100vh] p-20 ">
      <p className="text-4xl text-center font-bold">My Shops</p>
      {addProduct.length > 0 ? (
        <div>
          {removeProductDuplicate.map((product) => (
            <div className="flex p-2 justify-around bg-primaryColor rounded-lg text-white m-2 items-center capitalize">
              <img src={product.src[0]} className="w-[20rem]" />
              <div className="ml-4">
                <p className="text-4xl ">
                  price: {currency}
                  {currency == "$" && product.priceInDollar}
                  {currency == "₦" && product.priceInNaira}
                  {currency == "€" && product.priceInEuro}
                </p>
                <p className="text-4xl  ">title: {product.title}</p>
                <p className="text-4xl  ">category: {product.category}</p>
                <div className="flex border rounded-full items-center justify-around my-4  overflow-hidden w-[9rem]">
                  <button
                    className="bg-black text-white text-2xl p-2 px-4 font-bold hover:bg-red-500 duration-500  "
                    onClick={() => removeFromCart(product)}
                  >
                    -
                  </button>

                  <p className="mx-4">
                    {
                      addProduct.filter(
                        (p) => p.id == product.id
                      ).length
                    }
                  </p>
                  <button
                    className="bg-black text-white text-2xl py-2 px-4 font-bold hover:bg-green-500 duration-500"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>
              </div>
              <p
                className="text-red-500 font-bold  right-5 top-1 text-6xl cursor-pointer hover:text-red-700 duration-500"
                onClick={() => removeProduct(product)}
              >
                X
              </p>
            </div>
          ))}

          <div className="w-full flex justify-center my-2">
            <Link
              to="/payment"
              className="bg-green-400 text-white font-bold text-2xl py-2 px-6 rounded-full m-2 hover:bg-green-700 duration-1000 mb-20"
            >
              Proceed with Payment
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
