import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Mija";
  color: white;
  background-color: rgb(211, 58, 44);
`;

export const ContainerBottom = styled.div`
  display: none;
  width: 90%;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const Logo = styled.div`
  width: 59px;
  height: 79px;
  margin: 0px 20px;
`;

export const Button = styled.button`
  display: flex;
  width: 130px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  border: 3px solid white;
  border-radius: 5px;
  font-family: "Mija";
  font-size: 22px;
  font-weight: bold;
  color: white;
`;

export const Menu = styled.nav`
  width: 75%;
  flex-shrink: 0;

  @media only screen and (max-width: 1100px) {
    width: 70%;
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  width: 20%;
`;

export const MenuLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  color: white;

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
  }
`;

export const MenuIcon = styled.svg`
  position: relative;
  width: 33px;
  height: 38px;
  margin-left: 5px;
  margin-bottom: 15px;
  transform-origin: 0% 100%;
  transform: rotate(-10deg);
  transition: transform 0.3s ease-in-out;
`;

export const MenuItemTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  @media only screen and (max-width: 1100px) {
    font-size: 20px;
  }
`;

export const MenuItemSubtitle = styled.span`
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
