import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  background-color: rgb(246, 243, 242);
  overflow: hidden;
`;

export const PostWrapper = styled.div`
  position: relative;
  width: 33.33%;
  order: ${({ order }) => order};
`;

export const Post = styled.a`
  position: relative;
  display: block;
  height: 100%;
  padding: 30px;
  padding-bottom: 90px;
  box-sizing: border-box;
  z-index: 10;
  transition: background-color 0.5s ease-in-out, transform 0.5s ease-in-out;

  &:hover {
    background-color: white;
    z-index: 20;
    transform: scale(1.05);

    &::before {
      transition: all 0.5s ease-in-out;
      background-color: white;
      box-shadow: 0px 0px 100px grey;
      z-index: -10;
    }

    &::after {
      transition: all 0.5s ease-in-out;
      font-weight: bold;
      color: white;
      background-color: #006fc6;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 10px);
    transition: all 0.5s ease-in-out;
    z-index: 0;
  }

  &::after {
    content: "→";
    position: absolute;
    left: -20px;
    bottom: -5px;
    display: flex;
    height: 100px;
    width: 100px;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #d33a2c;
    z-index: 20;
  }
`;

export const Link = styled.a`
  position: absolute;
`;

export const Ago = styled.span`
  font-family: "Elena";
  font-size: 14px;
  color: #666;
`;

export const Title = styled.h2`
  font-family: "Mija";
  text-decoration: underline;
  font-size: 26px;
`;

export const Author = styled.span`
  font-family: "Mija";
  font-weight: bold;
  font-size: 17px;
  color: #666;
`;

export const AuthorLink = styled.a`
  text-decoration: underline;
  color: #666;
  margin-left: 5px;
`;

export const Content = styled.p`
  font-family: "Elena";
  font-size: 20px;
  line-height: 33px;
  color: #666;
`;

export const InsertBlock = styled.div`
  order: 4;
  width: 100%;
  padding: 50px 0px;
  display: flex;
`;
