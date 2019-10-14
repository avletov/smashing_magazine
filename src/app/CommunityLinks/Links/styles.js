import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Post = styled.article`
  display: flex;
  width: 50%;
  padding: 50px 50px 50px 0px;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    padding: 25px 10px 25px 0px;
    flex-direction: column;
  }
`;

export const LeftBlock = styled.div`
  padding: 15px 0px;

  @media only screen and (max-width: 500px) {
    display: flex;
    padding-left: 20px;
  }
`;

export const PhotoWrapper = styled.a`
  @media only screen and (max-width: 600px) {
    margin-left: 20px;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;

export const Photo = styled.img`
  width: 65px;
  height: 65px;
  border: 4px solid #d33a2c;
  border-radius: 10px;
  transform: rotate(-10deg);
  transform-origin: 0% 100%;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg);
  }
`;

export const RightBlock = styled.div`
  padding: 0px 0px 0px 15px;

  @media only screen and (max-width: 500px) {
    padding: 0px;
  }
`;

export const Author = styled.span`
  font-family: Mija;
  font-size: 20px;
  font-weight: bold;
  color: #666;
  display: ${({ isLeft }) => (isLeft ? "none" : "inline")};

  @media only screen and (max-width: 500px) {
    display: ${({ isLeft }) => (isLeft ? "inline" : "none")};
    margin: 10px 20px;
  }
`;

export const AuthorLink = styled.a`
  color: #666;
  text-decoration: underline;
`;

export const Title = styled.h3`
  font-family: Mija;
  font-size: 30px;

  @media only screen and (max-width: 600px) {
    margin: 0px;
  }
`;

export const Content = styled.p`
  font-family: "Elena";
  font-size: 20px;
  line-height: 34px;
  color: #333;
`;

export const Date = styled.span`
  font-size: 18px;
  color: #666;
`;
