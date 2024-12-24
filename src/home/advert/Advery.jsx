export default function Advery() {
  return (
    <div>
      <p className="text-6xl font-bold text-center">Ivy Chick Kaftan </p>
      <div className="flex px-10 justify-around items-center">
        <img src="/promo/promo2.jpeg" className="w-[40rem]" />
        <img src="/navigation/worldwide.png" className="w-[40rem] rolling" />
      </div>
      <div className="flex p-10 justify-around items-center">
        <img src="/promo/promo1.jpeg" className="w-[30rem]" />
        <div className="ml-5 ">
          <div>
            <p className="text-4xl underline ">Our Top Collcection</p>
            <ul className="text-3xl capitalize mt-5">
              <li>tie dye kaftans dress</li>
              <li>rich and famous dresses</li>
              <li>silk milkado dresses</li>
              <li>high fashions</li>
            </ul>
          </div>
          <div className="my-10">
            <p className="text-4xl underline ">Features</p>
            <ul className="text-3xl capitalize mt-5">
              <li>Fast & Secure Payment</li>
              <li>Quick Delivery</li>
              <li>Good quality dress with low price</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
