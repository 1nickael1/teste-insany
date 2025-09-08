'use client';
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  h1 {
    color: #5D5D6D;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 60px */
  }
`;

const SearchAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 85px;
    background-color: #F3F7FF;
    border-radius: 8px;
    padding: 9px 16px 9px 12px;

    input {
        border: none;
        outline: none;
        background-color: transparent;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
        width: 100%;
        min-width: 214px;
    }

    button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        width: 24px;
        height: 24px;
    }
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        width: 24px;
        height: 24px;
        position: relative;

        span {
            position: absolute;
            bottom: -9px;
            right: -9px;
            width: 17px;
            height: 17px;
            background-color:#DE3838;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFF;
            text-align: center;
            font-family: Saira;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 26px; /* 260% */
        }
    }
`;

export { CartContainer, HeaderContainer, SearchAndCartContainer, SearchContainer };
