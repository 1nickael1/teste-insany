'use client';
import styled from "styled-components";

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