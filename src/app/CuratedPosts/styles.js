import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  padding: 30px;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgb(246, 243, 242);
  box-sizing: border-box;

  @media only screen and (max-width: 500px) {
    padding: 30px 15px;
  }
`;

export const PostWrapper = styled.div`
  position: relative;
  width: 33.33%;

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Post = styled.article`
  position: relative;
  height: 100%;
  padding: 30px;
  padding-bottom: 90px;
  box-sizing: border-box;
  z-index: 10;
  transition: background-color 0.2s ease-in-out, transform 0.5s ease-in-out;

  @media only screen and (max-width: 1100px) {
    padding: 30px 0px 90px 10px;
  }

  @media only screen and (max-width: 600px) {
    padding: 15px 0px 30px 10px;
  }

  &:hover {
    background-color: white;
    z-index: 20;
    transform: scale(1.05);

    &::before {
      transition: all 0.5s ease-in-out;
      background-color: white;
      box-shadow: 0px 0px 25px rgb(50, 50, 50, 0.5);
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
`;

export const Subtitle = styled.h3`
  margin-bottom: 8px;
  font-family: "Elena";
  font-size: 17px;
  font-weight: 100;
  font-feature-settings: "smcp" 1, "c2sc" 1;
  font-variant-caps: small-caps;
  text-transform: lowercase;
  color: #666;
`;

export const Title = styled.h2`
  margin-bottom: 0px 0px 28px;
  font-family: "Mija";
  font-size: 28px;
  color: #333;
`;

export const List = styled.ul`
  margin-left: 30px;
  font-size: 20px;
  list-style-type: disc;
  color: red;
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: inline-block;
  padding: 10px 0px;
  text-decoration: underline;
  font-size: 22px;
  color: rgb(0, 111, 198);

  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 18px;
  }
`;
