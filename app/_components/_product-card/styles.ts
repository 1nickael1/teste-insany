'use client';
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 520px;

    border-radius: 19px;
    border: 1px solid #DDD;
    background: #FFF;
    box-shadow: -6px 8px 20.4px 0 rgba(0, 0, 0, 0.04);
    overflow: hidden;

    .image {
        width: 100%;
        min-height: 270px;
        max-height: 270px;
        height: 270px;
        object-fit: cover;
        // overflow: hidden;
    }
    
`;

export const ContentBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 21px 0 21px;
  gap: 15px;

  h1 {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
  }

  p {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Number of lines to show */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CategoryRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .category {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    text-transform: capitalize;
  }

  .rating {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    display: flex;
    align-items: center;
    gap: 4px;

    img {
      width: 14px;
      height: 12px;
    }
  }
`;

export const PriceStockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .price {
    color: #1B9847;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
  }

  .stock {
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`;

export const ButtonContainer = styled.button`
    display: flex;
    width: 100%;
    border-radius: 4px;
    background: #000;
    padding: 8px 0;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;

    
    span {
        color: #FFF;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }

    img {
        width: 24px;
        height: 24px;
    }
`;