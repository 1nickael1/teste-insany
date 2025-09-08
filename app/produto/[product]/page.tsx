
import ButtonCart from "@/app/_components/_button-cart";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, ContainerContent } from "../../styles";
import { DescriptionContainer, HeaderContainer, ProductContainer } from "./styles";

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


interface Response {
  product: Product
}


interface ProductPageProps {
  params: { product: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: "Produto - InsanyShop",
  description: "Produto - InsanyShop",
};

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
    const productParams = await params
  const productId = productParams.product

  async function fetchProductsById() {
    let url = `${process.env.BASE_URL}/api/products/${productId}`
    
    const data = await fetch(url, {
      cache: 'no-store'
    })
    const result: Response = await data.json()
    return result
  }
  
  const resultProducts = await fetchProductsById();

  return (
    <Container>
      <ContainerContent>
        <HeaderContainer>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Image src="/back.svg" alt="arrow-left" width={24} height={24} />
              <p>Voltar</p>
          </Link>
            
        </HeaderContainer>
        <h1>{resultProducts?.product?.name || productId}</h1>
        <ProductContainer>
          <Image
            src={resultProducts?.product?.image}
            alt={resultProducts?.product?.name}
            width={500}
            height={500}
            className="image"
          />
          <DescriptionContainer>
            <div className="description-top">
              <p className="category">{resultProducts?.product?.category}</p>
              <h1>{resultProducts?.product?.name}</h1>
              <p className="price">{formatPrice(resultProducts?.product?.price)}</p>
            </div>
            <div className="description-middle">
              <p>DESCRIÇÃO</p>
              <p className="description">{resultProducts?.product?.description}</p>
            </div>
            <ButtonCart product={resultProducts?.product} />
          </DescriptionContainer>
        </ProductContainer>
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