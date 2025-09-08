'use client';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #F3F7FF;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 48px;

  h1 {
    color: #000;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 60px */
    text-align: left;

  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CategorySelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  border: none;
  outline: none;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */

    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none; /* Standard */
    background: transparent url("/arrow-down.svg") no-repeat right center;
    background-size: 24px;
    padding-right: 2rem; /* Space for the arrow */
`;

export const CategoryOption = styled.option`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SortBySelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  border: none;
  outline: none;
  -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none; /* Standard */
  background: transparent url("/arrow-down.svg") no-repeat right center;
  background-size: 24px;
  padding-right: 2rem; /* Space for the arrow */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
`;

export const SortByOption = styled.option`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 520px);
  gap: 26px 34px;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 34px;

  .title {
      color: #000;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 60px */
    }
`;

export const CardCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 34px;

  
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
    border: 1px solid #E0E0E0;
    background: #FFF;
    padding: 32px 0;

    

  .name {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
  }

  .qty {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
`;