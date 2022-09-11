import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Head from "next/head";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

import Header from "../../components/Header";
import { stripe } from "../../lib/stripe";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products";

interface IProductProps {
  product: {
    id: string;
    sku: string;
    name: string;
    description: string;
    imageUrl: string;
    defaultPriceId: string;
    price: number;
    priceFormatted: string;
    currency: string;
  };
}

export default function ProductTest({ product }: IProductProps) {
  const { addItem } = useShoppingCart();

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <Header />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <button onClick={() => addItem(product)}>Adicionar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_MOHI4qiR5XBIg2" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  console.log(product);

  return {
    props: {
      product: {
        id: product.id,
        sku: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        currency: "BRL",
        price: price.unit_amount,
        priceFormatted: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
