'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartContainer, HeaderContainer, SearchAndCartContainer, SearchContainer } from "./styles";


export default function Header() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartStored = localStorage.getItem("@insany-cart");
    
    if (!cartStored) {
      localStorage.setItem("@insany-cart", JSON.stringify([]));
      setCart([]);
      return;
    }
    setCart(cartStored ? JSON.parse(cartStored) : []);
  }, []);

  return (
    <div className="w-full bg-white">
      <HeaderContainer>
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1>InsanyShop</h1>
        </Link>
          <SearchAndCartContainer>
              <SearchContainer>
                <input type="text" placeholder="Procurando por algo específico?" />
                <button>
                  <Image
                    src="/search-loupe.svg"
                    alt="search"
                    width={24}
                    height={24}
                  />
                </button>
              </SearchContainer>
              <CartContainer>
                <Link href="/cart">
                  <Image
                    src="/shopping-bag.svg"
                    alt="cart"
                    width={24}
                    height={24}
                  />
                  {cart.length > 0 && <span>{cart.length}</span>}
                </Link>
              </CartContainer>
          </SearchAndCartContainer>
      </HeaderContainer>
    </div>
  );
}