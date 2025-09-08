'use client';
import Image from "next/image";
import Link from "next/link";
import { ButtonPaginationUI, PaginationContainer } from "./styles";


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
  
  export interface Response {
    products: Product[]
    pagination: Pagination
  }

export default function Pagination({pagination}: {pagination: Pagination}) {

    function ButtonPagination({page, disabled = false, backButton = false, nextButton = false}: {page: number, disabled?: boolean, backButton?: boolean, nextButton?: boolean}) {
        
        if (backButton) {
            return (
                <ButtonPaginationUI style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}> 
                    {disabled ? (
                        <span>
                            <Image src="/arrow-left.svg" alt="arrow-left" width={24} height={24} />
                        </span>
                    ) : (
                        <Link href={`/?page=${pagination.currentPage - 1}`}>
                            <Image src="/arrow-left.svg" alt="arrow-left" width={24} height={24} />
                        </Link>
                    )}
                </ButtonPaginationUI>
            )
        }

        if (nextButton) {
            return (
                <ButtonPaginationUI style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
                    {disabled ? (
                        <span>
                            <Image src="/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </span>
                    ) : (
                        <Link href={`/?page=${pagination.currentPage + 1}`}>
                            <Image src="/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                        </Link>
                    )}
                </ButtonPaginationUI>
            )
        }

        return (
            <ButtonPaginationUI style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
                {disabled ? (
                    <span>
                        {page}
                    </span>
                ) : (
                    <Link href={`/?page=${page}`}>
                        {page}
                    </Link>
                )}
            </ButtonPaginationUI>
        )
    }

    function MakeButtonPagination() {
        const array = [...Array(pagination.totalPages).keys()];
        return (
            array.map((item, index) => (
                <ButtonPagination key={index} page={index + 1} disabled={index + 1 === pagination.currentPage} />
            ))
        )
    }
  return (
    <PaginationContainer>
        {<ButtonPagination backButton page={pagination.currentPage - 1} disabled={!pagination.hasPreviousPage} />}
        {MakeButtonPagination()}
        {<ButtonPagination nextButton page={pagination.currentPage + 1} disabled={!pagination.hasNextPage} />}
    </PaginationContainer>
  )
}