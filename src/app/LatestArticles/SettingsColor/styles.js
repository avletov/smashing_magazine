import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  right: 3%;
  z-index: 10;

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
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg);

    & ${Spinner}:nth-child(1) {
      transform: rotate(0deg);
    }
  }
`;

export const Spinner = styled.svg`
  width: 50px;
  height: 50px;
  transform: rotate(180deg);
  transition: all 0.3s ease-in-out;
  color: ${({ isRedVersion }) =>
    isRedVersion ? "#c7372a" : "rgb(102, 102, 102)"};
`;

export const Button = styled.button`
  display: flex;
  width: ${({ isRedVersion }) => (isRedVersion ? "160px" : "170px")};
  height: 40px;
  justify-content: center;
  align-items: center;
  border: ${({ isRedVersion }) =>
    isRedVersion ? "1px solid white" : "4px solid rgb(230, 230, 230)"};
  border-radius: 10px;
  font-family: "Mija";
  font-size: 20px;
  font-weight: bold;
  color: ${({ isRedVersion }) =>
    isRedVersion ? "white" : "rgb(102, 102, 102)"};
  transition: all 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    color: ${({ isRedVersion }) =>
      isRedVersion ? "#c7372a" : "rgb(102, 102, 102)"};
    background-color: white;
  }
`;
