import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &::before {
    content: "";
    display: block;
    width: 300px;
    height: 30px;
    position: absolute;
    top: 120px;
    background: radial-gradient(
      farthest-side at 150px 15px,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    );
  }
`;

export const TitleText = styled.span`
  padding: 5px 10px;
  font-family: "Mija";
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;
  background-color: ${({ isRedVersion }) =>
    isRedVersion ? "white" : "#c7372a"};
  color: ${({ isRedVersion }) => (isRedVersion ? "rgb(51, 51, 51)" : "white")};
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 500px) {
    font-size: 26px;
  }
`;
