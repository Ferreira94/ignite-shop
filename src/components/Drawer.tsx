import { useState } from "react";
import Image from "next/future/image";
import { Minus, Plus, X, ShoppingBag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { CartEntry } from "use-shopping-cart/core";
import axios from "axios";

import {
  DrawerContainer,
  DrawerContent,
  CartItemContainer,
  CartFooter,
  EmptyCart,
} from "../styles/pages/drawer";

interface IDrawerProps {
  onClose: () => void;
}

export function Drawer({ onClose }: IDrawerProps) {
  const {
    cartDetails,
    cartCount,
    formattedTotalPrice,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart();
  const cart: CartEntry[] = [];
  const items = [];
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  for (const id in cartDetails) {
    const item = cartDetails[id];
    cart.push(item);
  }

  cart.map((item) =>
    items.push({ price: item.defaultPriceId, quantity: item.quantity })
  );

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkoutStripe", {
        items,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <DrawerContainer>
      <main onClick={onClose} />
      <DrawerContent>
        <X onClick={onClose} />
        <strong>Sacola de Compras</strong>
        {cartCount > 0 && (
          <CartItemContainer>
            <>
              {cart.map((item) => (
                <div key={item.id}>
                  <Image src={item.imageUrl} alt="" width={90} height={90} />
                  <div>
                    <p>{item.name.substring(0, 28)}</p>
                    <div>
                      <div>
                        <strong>
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(item.price / 100)}{" "}
                          x
                        </strong>
                        <strong>{item.quantity}</strong>
                        <div className="controller">
                          <Plus
                            onClick={() => incrementItem(item.id, { count: 1 })}
                          />
                          <Minus
                            onClick={() => decrementItem(item.id, { count: 1 })}
                          />
                        </div>
                      </div>
                    </div>
                    <span onClick={() => removeItem(item.id)}>Remover</span>
                  </div>
                </div>
              ))}
            </>
          </CartItemContainer>
        )}
        {cartCount > 0 && (
          <CartFooter>
            <div>
              <p>Quandtidade</p>
              <p>{cartCount} itens</p>
            </div>
            <div>
              <strong>Valor Total</strong>
              <h4>{formattedTotalPrice}</h4>
            </div>
            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </button>
          </CartFooter>
        )}
        {cartCount === 0 && (
          <EmptyCart>
            <ShoppingBag />
            <strong>Sua sacola está vazia!</strong>
          </EmptyCart>
        )}
      </DrawerContent>
    </DrawerContainer>
  );
}
