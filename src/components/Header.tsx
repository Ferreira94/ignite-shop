import { useState } from "react";
import Link from "next/link";
import Image from "next/future/image";
import { ShoppingBag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

import logoImg from "../assets/Logo.svg";

import { Drawer } from "./Drawer";

import { HeaderContainer, CountCart } from "../styles/pages/header";

export default function Header() {
  const { cartCount } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <div>
        <ShoppingBag onClick={() => setIsOpen(true)} />
        {cartCount > 0 && (
          <CountCart>
            <span>{cartCount}</span>
          </CountCart>
        )}
      </div>
      {isOpen && <Drawer onClose={() => setIsOpen(false)} />}
    </HeaderContainer>
  );
}
