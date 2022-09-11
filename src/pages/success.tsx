import { useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/future/image";
import { useShoppingCart } from "use-shopping-cart";
import { CartEntry } from "use-shopping-cart/core";

import logoImg from "../assets/Logo.svg";

import { stripe } from "../lib/stripe";

import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface ISuccessProps {
  customerName: string;
}

export default function Success({ customerName }: ISuccessProps) {
  const { clearCart, cartDetails, cartCount } = useShoppingCart();
  const [isLoading, setIsLoading] = useState(false);
  const items: CartEntry[] = [];

  for (const id in cartDetails) {
    const item = cartDetails[id];
    items.push(item);
  }

  function handleClearCart() {
    setIsLoading(true);

    clearCart();
  }

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        {!isLoading ? (
          <>
            <Link href="/" onClick={handleClearCart}>
              <Image src={logoImg} alt="" />
            </Link>

            <h1>Compra efetuata com sucesso!</h1>

            <section>
              {items.map((item) => (
                <ImageContainer key={item.id}>
                  <Image src={item.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>
              ))}
            </section>

            <p>
              Uhuul <strong>{customerName}</strong>, sua compra de {cartCount}{" "}
              camisetas já está a caminho de sua casa!!!
            </p>

            <Link href="/" onClick={handleClearCart}>
              Voltar para o catálogo
            </Link>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;

  return {
    props: {
      customerName,
    },
  };
};
