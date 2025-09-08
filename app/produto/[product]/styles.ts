'use client';
import styled from "styled-components";



export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  width: 100%;
  height: 500px;

  img {
    width: 500px;
    height: 500px;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 100%;

  .description-top {
    h1 {
      color: #41414D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 300;
        line-height: 150%; /* 48px */
    }

    .category {
      color: #41414D;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        margin-bottom: 12px;
        text-transform: capitalize;
    }

    .price {
      color: #46AB6A;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 30px */
    }
  }

  .description-middle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;

    .description {
      color: #41414D;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    }

    p {
      color:  #737380;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
        text-transform: uppercase;
    }
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

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  a {
  display: flex;
  align-items: center;
  gap: 8px;

    p {
          color: #617480;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 21px */
      }
  }

`;