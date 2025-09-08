'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { CategoryOption, CategorySelect, SortByOption, SortBySelect, SortContainer } from '../../styles'

interface Category {
  id: string
  name: string
  description: string
  icon: string
  productCount: number
}

interface FiltersProps {
  categories: Category[]
  currentCategory?: string
  currentSort?: string
}

export default function Filters({ categories, currentCategory, currentSort }: FiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value
    
    router.push(`/categoria/${selectedSort}`)
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    return;
  }

  return (
    <SortContainer>
      <CategorySelect 
        value={currentCategory || "all"} 
        onChange={handleCategoryChange}
      >
        <CategoryOption value="all">Selecione a categoria</CategoryOption>
        {categories?.map((category: Category) => (
          <CategoryOption key={category.id} value={category.id}>
            {category.name}
          </CategoryOption>
        ))}
      </CategorySelect>
      
      <SortBySelect 
        value={currentSort || "all"} 
        onChange={handleSortChange}
      >
        <SortByOption value="all">Organizar por</SortByOption>
        <SortByOption value="novidades">Novidades</SortByOption>
        <SortByOption value="desc">Preço: Maior - Menor</SortByOption>
        <SortByOption value="asc">Preço: Menor - Maior</SortByOption>
        <SortByOption value="mais-vendidos">Mais vendidos</SortByOption>
      </SortBySelect>
    </SortContainer>
  )
}
