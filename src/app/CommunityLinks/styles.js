import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 75px 50px;
  box-sizing: border-box;

  @media only screen and (max-width: 500px) {
    padding: 70px 20px 50px;
  }
`;

export const LeftBlock = styled.div`
  margin: 30px;
`;

export const RightBlock = styled.div`
  width: 100%;
  margin: 10px;

  @media only screen and (max-width: 500px) {
    margin: 10px 0px;
  }
`;

export const PhotoWrapper = styled.a`
  @media only screen and (max-width: 600px) {
    margin-left: 15px;
  }
`;

export const Photo = styled.img`
  border: 7px solid #d33a2c;
  border-radius: 20px;
  transform: rotate(-10deg);
  transform-origin: 0% 100%;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg);
  }
`;

export const Desc = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  font-family: "Elena";
  font-size: 19px;
  font-weight: 100;
  letter-spacing: 2px;
  color: #666;
`;

export const Content = styled.p`
  font-family: "Elena";
  font-size: 21px;
  line-height: 34px;
  color: #333;
`;

export const TwitterLink = styled.a`
  position: relative;
  color: #006fc6;
  text-shadow: 0px 0px 1px white;
  z-index: 0;

  &::after {
    position: absolute;
    top: 21px;
    left: 0px;
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid #006fc6;
    z-index: -10;
  }
`;
