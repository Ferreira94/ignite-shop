import { AppProps } from "next/app";
import { CartProvider } from "use-shopping-cart";

import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl="stripe.com"
      cancelUrl={process.env.NEXT_URL}
      currency="BRL"
      allowedCountries={["BR"]}
      billingAddressCollection={true}
    >
      <Component {...pageProps} />
    </CartProvider>
  );
}
