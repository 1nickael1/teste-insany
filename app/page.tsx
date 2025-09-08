import Link from "next/link";
import Filters from "./_components/_filters";
import Pagination from "./_components/_pagination";
import ProductCard from "./_components/_product-card";
import { CardCategoryContainer, CardContainer, CategoryCard, CategoryContainer, Container, ContainerContent } from "./styles";

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

interface Category {
  id: string
  name: string
  description: string
  icon: string
  productCount: number
}

interface ResponseCategories {
  categories: Category[]
}

interface QueryParams {
  page: number
  limit: number
  category: string
  sort: string
}

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Home({ searchParams }: HomeProps) {
  const allParams = await searchParams
  const page = allParams.page as string
  const category = allParams.category as string
  const sort = allParams.sort as string
  const search = allParams.search as string

  async function fetchProducts() {
    let url = `${process.env.BASE_URL}/api/products?limit=6`
    if (page) url += `&page=${page}`
    if (category) url += `&category=${category}`
    if (sort) url += `&sort=${sort}`
    if (search) url += `&search=${search}`
    
    const data = await fetch(url, {
      cache: 'no-store' 
    })
    const result: Response = await data.json()
    return result
  }

  async function fetchAllCategories() {
    const data = await fetch(`${process.env.BASE_URL}/api/categories`)
    const result: ResponseCategories = await data.json()
    return result
  }
  
  const resultProducts = await fetchProducts();
  const resultCategories = await fetchAllCategories();

  return (
    <Container>
      <ContainerContent>
        <Filters 
          categories={resultCategories?.categories || []}
          currentCategory={category}
          currentSort={sort}
        />
        <h1>Todos os produtos</h1>
        { resultProducts?.products?.length > 0 ? (
        <CardContainer>
          {resultProducts?.products?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </CardContainer>
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
        <Pagination pagination={resultProducts?.pagination} />

        <CategoryContainer>
          <p className="title">Principais categorias</p>
          <CardCategoryContainer>
            {resultCategories?.categories?.map((category: Category) => (
                <CategoryCard key={category.id}>
                  <Link href={`/categoria/${category.id}`} style={{ textDecoration: "none" }}>
                      <p className="name">{category.name}</p>
                      <p className="qty">{category.productCount} produtos</p>
                  </Link>
                </CategoryCard>
            ))}
          </CardCategoryContainer>
        </CategoryContainer>
  </ContainerContent>
    </Container>
  );
}