import Pagination from "../../_components/_pagination";
import ProductCard from "../../_components/_product-card";
import { CardContainer, Container, ContainerContent, SortByOption, SortBySelect } from "../../styles";

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

interface CategoryPageProps {
  params: { category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
    const category = await params
  const categoryId = category.category
  const allParams = await searchParams
  const page = allParams.page as string
  const sort = allParams.sort as string

  async function fetchProductsByCategory() {
    let url = `${process.env.BASE_URL}/api/products?limit=6&category=${categoryId}`
    if (page) url += `&page=${page}`
    if (sort) url += `&sort=${sort}`
    
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
  
  const resultProducts = await fetchProductsByCategory();
  const resultCategories = await fetchAllCategories();

  const currentCategory = resultCategories?.categories?.find(cat => cat.id === categoryId);

  return (
    <Container>
      <ContainerContent>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <p>Categoria: {currentCategory?.name || categoryId}</p>
            <SortBySelect 
                value={"all"} 
            >
                <SortByOption value="all">Organizar por</SortByOption>
                <SortByOption value="novidades">Novidades</SortByOption>
                <SortByOption value="desc">Preço: Maior - Menor</SortByOption>
                <SortByOption value="asc">Preço: Menor - Maior</SortByOption>
                <SortByOption value="mais-vendidos">Mais vendidos</SortByOption>
            </SortBySelect>
        </div>
        <h1>{currentCategory?.name || categoryId}</h1>
        <CardContainer>
          {resultProducts?.products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardContainer>
        <Pagination pagination={resultProducts?.pagination} />
      </ContainerContent>
    </Container>
  );
}
