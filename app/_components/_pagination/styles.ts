import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 25px;
`;

export const ButtonPaginationUI = styled.div`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #E9E9F0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #D9D9E3;
    }

    a {
        color: #737380;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        text-transform: uppercase;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;