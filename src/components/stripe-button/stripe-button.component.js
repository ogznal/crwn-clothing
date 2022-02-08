import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey =
    "pk_test_51INm4ABJs18NUUfiyuOV8NSzaofbuucRyoive08NoPZBtaWIzU5P57osuSG2R5zKBkLzaIZ2NV6ddW2N9ezKCHTG0051s71uUU";

  const onToken = token => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
