'use client';

import Image from "next/image";
import Link from "next/link";
import ButtonCart from "../_button-cart";
import { CategoryRatingContainer, ContentBottom, PriceStockContainer, ProductCardContainer } from "./styles";


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
  
  export interface Pagination {
    currentPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    totalPages: number
    totalProducts: number
  }
  
  interface Response {
    products: Product[]
    pagination: Pagination
  }

export default function ProductCard({product}: {product: Product}) {
   
    function handleAddToCart() {
        const cart = localStorage.getItem("@insany-cart");
        const cartItems = cart ? JSON.parse(cart) : [];
        cartItems.push(product);
        localStorage.setItem("@insany-cart", JSON.stringify(cartItems));
        window.location.reload();
    }

  return (
    <Link href={`/produto/${product.id}`} style={{ textDecoration: "none" }}>
        <ProductCardContainer>
        <Image
            src={product.image}
            alt={product.name}
            width={356}
            height={270}
            className="image"
        />
        <ContentBottom>
            <CategoryRatingContainer>
                <span className="category">{product.category}</span>
                <span className="rating"><Image src="/star.svg" alt="rating" width={14} height={12} />{product.rating}</span>
            </CategoryRatingContainer>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <PriceStockContainer>
                <span className="price">{formatPrice(product.price)}</span>
                <span className="stock">{product.stock} em estoque</span>
            </PriceStockContainer>
            <ButtonCart product={product} />
        </ContentBottom>
        </ProductCardContainer>
    </Link>
  );
}

function formatPrice(price: number, locale = 'pt-BR', currency = 'BRL') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(price);
}