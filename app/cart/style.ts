'use client';
import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

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

export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 32px;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;
  height: 100%;

  .title {
  color: #41414D;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    text-transform: uppercase;
    margin-bottom: 6px;
}

.total-items {
  color:  #41414D;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 24px */
margin-bottom: 23px;
}
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 30%;
  height: 700px;
  padding: 16px 24px;

  background-color: #FFF;

  .title {
    color:  #41414D;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;

    span {
        color:  #41414D;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
    }
  }

  .divider {
    width: 100%;
    margin: 8px 0;
    height: 1px;
    background: #DCE2E5;
  }

  .button-buy {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    background: #51B853;
    color: #F5F5FA;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 32px;

    &:hover {
      background: #419644;
    }
  }

  .help-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 12px;

    a {
        color: #737380;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
        text-transform: uppercase;
    }
  }
`;

export const CardProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  border-radius: 8px;
  background: #FFF;
  overflow: hidden;
  margin-bottom: 16px;

  img {
    width: 250px;
    height: 200px;
    object-fit: cover;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 16px 20px 16px 0;

  .description {
    color:  #41414D;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    margin-bottom: 25px;
}
`;

export const DescriptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .name {
    color: #41414D;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 30px */
    margin-bottom: 12px;
  }

  .excluir {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const DescriptionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  select {
    border-radius: 8px;
    border: 1px solid #A8A8B3;
    background-color: #F3F5F6;
    padding: 8px 12px;
    color: #737380;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    text-transform: uppercase;
  }
`;