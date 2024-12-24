import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Payment() {
  return (
    <div className="p-20 w-full h-[100vh]">
      <p>Continue with Payment</p>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AXI9cJmiccuyakarLZj-FQaGpYIf7ahDoucrvtgDo_rhkZz3we7cUVvT_yycscesYJUaoquPWVKn4i5c",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Replace with the actual price
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                `Transaction completed by ${details.payer.name.given_name}`
              );
            });
          }}
          onError={(err) => {
            console.error("PayPal Checkout error", err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
