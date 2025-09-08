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

export interface ProductCart extends Product {
    quantity: number;
    total: number;
}

export default function ButtonCart({product}: {product: Product}) {
    function handleAddToCart() {
        const cart = localStorage.getItem("@insany-cart");
        let cartItems = cart ? JSON.parse(cart) : [];

        if(cartItems.find((item: Product) => item.id === product.id)) {
            cartItems = cartItems.map((item: ProductCart) => {
                if(item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        total: (item.quantity + 1) * product.price
                    }
                }
                return item;
            });
        } else {
            cartItems.push(formatProduct(product));
        }
        localStorage.setItem("@insany-cart", JSON.stringify(cartItems));
        window.location.reload();
    }

    function formatProduct(product: Product) {
        return {
            ...product,
            quantity: 1,
            total: product.price * 1
        }
    }

    return (
        <ButtonContainer onClick={() => handleAddToCart()}>
              <Image src="/cart.svg" alt="cart" width={24} height={24} />
              <span>Adicionar</span>
          </ButtonContainer>
    )
}