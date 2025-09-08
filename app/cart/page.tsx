'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCart } from "../_components/_button-cart";
import { Container, ContainerContent } from "../styles";
import { CardProduct, ContainerHeader, ContainerInfo, ContentLeft, ContentRight, DescriptionContainer, DescriptionFooter, DescriptionHeader } from "./style";


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

export default function CartPage() {

  const [cart, setCart] = useState<ProductCart[]>([]);

  useEffect(() => {
    const cartStored = localStorage.getItem("@insany-cart");

    console.log(cartStored);
    
    if (!cartStored) {
      localStorage.setItem("@insany-cart", JSON.stringify([]));
      setCart([]);
      return;
    }
    setCart(cartStored ? JSON.parse(cartStored) : []);
  }, []);

  function totalPrice() {
    return cart.reduce((acc, item) => acc + item.total, 0);
  }

  if (cart.length === 0) {
    return (
      <Container>
        <ContainerContent>
          <h1>Carrinho vazio</h1>
        </ContainerContent>
      </Container>
    );
  }
  
  function handleRemoveFromCart(id: string) {
    const cartItems = cart.filter((item) => item.id !== id);
    localStorage.setItem("@insany-cart", JSON.stringify(cartItems));
    setCart(cartItems);
  }

  function handleUpdateQuantity(id: string, quantity: number) {
    const cartItems = cart.map((item) => {
      if(item.id === id) {
        return { ...item, quantity: quantity, total: quantity * item.price };
      }
      return item;
    });
    localStorage.setItem("@insany-cart", JSON.stringify(cartItems));
    setCart(cartItems);
  }

  return (
    <Container>
      <ContainerContent>
        <ContainerHeader> 
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image src="/back.svg" alt="arrow-left" width={24} height={24} />
              <p>Voltar</p>
          </Link>
        </ContainerHeader>
        <ContainerInfo>
          <ContentLeft>
            <span className="title">Seu Carrinho</span>
            <span className="total-items">Total ({cart.length} produtos) <strong>{formatPrice(totalPrice())}</strong></span>
            {cart.map((item) => (
              <CardProduct key={item.id}>
                <Image src={item.image} alt={item.name} width={100} height={100} />
                <DescriptionContainer>
                  <DescriptionHeader>
                    <span className="name">{item.name}</span>
                    <div className="excluir" onClick={() => handleRemoveFromCart(item.id)}>
                      <Image src="/trash-icon.svg" alt="excluir" width={24} height={24} />
                    </div>
                  </DescriptionHeader>
                  <span className="description">{item.description}</span>
                  <DescriptionFooter>
                    <select className="quantity" defaultValue={item.quantity} onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}>
                      {[...Array(item.stock).keys()].map((item) => (
                        <option value={item + 1} key={item + 1}>{item + 1}</option>
                      ))}
                    </select>
                    <span className="price">{formatPrice(item.total)}</span>
                  </DescriptionFooter>
                </DescriptionContainer>
              </CardProduct>
            ))}
          </ContentLeft>
          <ContentRight>
            <div>
              <span className="title">Resumo do pedido</span>
              <div className="row">
                <span>Subtotal de produtos</span>
                <span>{formatPrice(totalPrice())}</span>
              </div>
              <div className="row">
                <span>Entrega</span>
                <span>{formatPrice(40)}</span>
              </div>
              <div className="divider"></div>
              <div className="row">
                <span>Total</span>
                <span><strong>{formatPrice(totalPrice() + 40)}</strong></span>
              </div>
              
              <div className="button-buy">Finalizar compra</div>
            </div>
            <div className="help-links">
              <Link href="#" style={{ textDecoration: 'underline' }}>AJUDA</Link>
              <Link href="#" style={{ textDecoration: 'underline' }}>REEMBOLSOS</Link>
              <Link href="#" style={{ textDecoration: 'underline' }}>ENTREGAS E FRETE</Link>
              <Link href="#" style={{ textDecoration: 'underline' }}>TROCAS E DEVOLUÇÕES</Link>
            </div>
          </ContentRight>
        </ContainerInfo>
      </ContainerContent>
    </Container>
  );
}

function formatPrice(price: number, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
  }).format(price);
}