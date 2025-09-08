'use client';
import Image from "next/image";
import { ButtonContainer } from "./styles";

export interface Product {
    brand: string
    category: string
    description: string
    id: string
    image: string
    name: string
    price: number
    rating: boolean
    stock: number
  }

export default function ButtonCart({product}: {product: Product}) {
    function handleAddToCart() {
        const cart = localStorage.getItem("@insany-cart");
        const cartItems = cart ? JSON.parse(cart) : [];
        cartItems.push(product);
        localStorage.setItem("@insany-cart", JSON.stringify(cartItems));
        window.location.reload();
    }
    return (
        <ButtonContainer onClick={() => handleAddToCart()}>
              <Image src="/cart.svg" alt="cart" width={24} height={24} />
              <span>Adicionar</span>
          </ButtonContainer>
    )
}