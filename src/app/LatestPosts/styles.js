import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  background-color: rgb(246, 243, 242);
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    padding: 15px;
  }
`;

export const PostWrapper = styled.div`
  position: relative;
  width: 33.33%;
  order: ${({ order }) => order};

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
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

  @media only screen and (max-width: 1100px) {
    padding: 30px 0px 90px 10px;
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
  order: ${({ order }) => order};
  width: 100%;
  padding: 50px 0px;
  display: flex;

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const LoadMoreCont = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  order: 10;
`;

export const LoadMore = styled.a`
  padding: 10px 0px;
  border-bottom: 5px solid #d33a2c;
`;

export const VerticalHeader = styled.h4`
  position: absolute;
  top: ${({ type }) => {
    switch (type) {
      case "latest":
        return "125px";
      case "community":
        return "150px";
      case "curated":
        return "150px";
    }
  }};
  left: ${({ type }) => {
    switch (type) {
      case "latest":
        return "-30px";
      case "community":
        return "-50px";
      case "curated":
        return "-40px";
    }
  }};
  margin: 0px;
  transform: rotate(90deg);
  font-family: "Elena";
  font-weight: bold;
  font-size: 15px;

  @media only screen and (max-width: 600px) {
    top: 20px;
    left: 50%;
    transform: rotate(0deg);
  }

  &::before {
    position: absolute;
    top: 45%;
    left: -170px;
    content: "";
    width: 150px;
    height: 1px;
    border: 0.5px solid black;
    box-sizing: border-box;
  }
`;
