import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  right: 3%;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  margin: 0px 20px;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 45px;
    display: block;
    height: 16px;
    width: 70px;
    transition: background 0.3s ease-in-out;
    background: radial-gradient(
      farthest-side at 35px 8px,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    );
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }

  &:hover::before {
    background: none;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  transform-origin: 0% 100%;
  transform: rotate(-10deg);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg);
  }
`;

export const Spinner = styled.svg`
  width: 50px;
  height: 50px;
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
  color: #c7372a;
`;

export const Button = styled.button`
  display: flex;
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  font-family: "Mija";
  font-size: 20px;
  font-weight: bold;
  color: white;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    color: #c7372a;
    background-color: white;
  }
`;
