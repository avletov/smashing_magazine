import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 333px;
  height: 240px;
  margin: 30px;
  padding: 18px;
  padding-bottom: 36px;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  border-radius: 10px;
  font-family: "Elena";
  background: linear-gradient(-30deg, #794cffe5, #794cffe5 45%, #794cff 45%)
    #fff;

  @media only screen and (max-width: 1100px) {
    display: none;
  }

  &::before {
    content: "Our friends and supporters ↓";
    position: absolute;
    top: -30px;
    font-family: "Elena";
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: 175px;
  height: 56px;
`;

export const Heading = styled.h4`
  font-size: 14px;
  color: white;
`;

export const Text = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 14px;
  color: rgb(42, 82, 142);
  background-color: white;
`;
