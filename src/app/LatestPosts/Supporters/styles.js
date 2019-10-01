import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 333px;
  height: 240px;
  margin: 30px 30px 30px 60px;
  padding: 18px;
  padding-bottom: 36px;
  border-radius: 10px;
  font-family: "Elena";
  align-items: center;
  background: linear-gradient(-30deg, #794cffe5, #794cffe5 45%, #794cff 45%)
    #fff;
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
