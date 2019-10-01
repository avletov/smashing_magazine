import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  width: 100%;
  height: 175px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    height: 155px;
  }

  @media only screen and (max-width: 900px) {
    height: 120px;
    justify-content: space-between;
  }

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

export const Nav = styled.nav`
  width: 75%;
  flex-shrink: 0;

  @media only screen and (max-width: 1100px) {
    width: 70%;
  }

  @media only screen and (max-width: 1000px) {
    width: 65%;
  }

  @media only screen and (max-width: 900px) {
    width: 60%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
    order: 3;
  }
`;

export const List = styled.ul`
  display: flex;

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const Item = styled.li`
  width: 20%;

  @media only screen and (max-width: 800px) {
    width: 50%;
    height: 50px;
    float: left;
    text-align: left;

    &:nth-child(1) {
      background-color: rgb(188, 52, 40);
    }

    &:nth-child(2) {
      background-color: rgb(215, 55, 42);
    }

    &:nth-child(3) {
      background-color: rgb(193, 49, 37);
    }

    &:nth-child(4) {
      background-color: rgb(188, 52, 40);
    }

    &:nth-child(5) {
      background-color: rgb(215, 55, 42);
    }
  }
`;

export const Link = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  color: white;

  @media only screen and (max-width: 800px) {
    height: 100%;
    padding: 0px;
    justify-content: center;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 40px;
    left: 40%;
    width: 23px;
    height: 1px;
    box-shadow: 5px 5px 3px black;
    transition: box-shadow 0.3s ease-in-out;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }

  &:hover::before {
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0);
  }

  &:hover ${Icon}:nth-child(1) {
    transform: rotate(0deg);
  }

  &:hover ${ItemTitle} {
    color: black;
  }

  &:hover ${ItemSubtitle} {
    color: black;
  }
`;

export const Icon = styled.svg`
  width: 33px;
  height: 38px;
  margin-left: 5px;
  margin-bottom: 15px;
  transform-origin: 0% 100%;
  transform: rotate(-10deg);
  transition: transform 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const ItemTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  @media only screen and (max-width: 1100px) {
    font-size: 20px;
  }
`;

export const ItemSubtitle = styled.span`
  margin-top: 10px;
  font-family: "Elena";
  font-size: 17px;
  font-style: italic;
  transition: color 0.3s ease-in-out;

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Logo = styled.svg`
  width: 60px;
  height: 80px;
  margin: 20px;
`;

export const Button = styled.button`
  display: flex;
  width: 130px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  border: ${props => (props.isShowSearch ? null : "3px solid white")};
  border-radius: 5px;
  font-family: "Mija";
  font-size: 22px;
  font-weight: bold;
  color: white;
  background-color: ${props =>
    props.isShowSearch ? "rgba(0, 0, 0, 0.3)" : null};

  &::before {
    content: "🔍 Topics";

    @media only screen and (max-width: 900px) {
      content: "🔍 Menu";
    }
  }
`;
