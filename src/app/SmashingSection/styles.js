import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  padding: ${({ isPrint }) => (isPrint ? "50px 50px 0px" : "30px 75px 10px")};
  flex-direction: column;
  justify-content: center;
  align-items: ${({ isPrint }) => (isPrint ? "center" : "flex-start")};
  background-image: ${({ isPrint }) =>
    isPrint
      ? "-webkit-gradient(linear, left top, left bottom, color-stop(50%, #009245), to(#8bc53f))"
      : null};
  background-color: ${({ isPrint }) => (isPrint ? null : "#d33a2c")};

  @media only screen and (max-width: 800px) {
    padding: ${({ isPrint }) => (isPrint ? null : "30px 50px 10px")};
    align-items: center;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 25px;
    padding-right: 25px;
    align-items: center;
  }
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-family: "Elena";
  font-size: 17px;
  letter-spacing: 2px;
  color: white;

  @media only screen and (max-width: 800px) {
    width: ${({ isPrint }) => (isPrint ? null : "100%")};
    text-align: ${({ isPrint }) => (isPrint ? "center" : "left")};
  }
`;

export const Title = styled.h2`
  margin: ${({ isPrint }) => (isPrint ? "30px" : "0px")};
  text-align: center;
  font-family: "Mija";
  font-size: 46px;
  color: white;
  text-shadow: ${({ isPrint }) =>
    isPrint
      ? "3px 0 #009245, 2px 0 #009245, 1px 0 #009245, -1px 0 #009245, -2px 0 #009245, -3px 0 #009245"
      : "3px 0 #d33a2c, 2px 0 #d33a2c, 1px 0 #d33a2c, -1px 0 #d33a2c, -2px 0 #d33a2c, -3px 0 #d33a2c"};
  text-decoration: underline;
  text-decoration-color: ${({ isPrint }) => (isPrint ? "#74c49a" : "#e58980")};
  text-decoration-skip-ink: none;

  @media only screen and (max-width: 800px) {
    font-size: 37px;
    text-align: ${({ isPrint }) => (isPrint ? null : "left")};
    width: ${({ isPrint }) => (isPrint ? null : "100%")};
  }

  @media only screen and (max-width: 600px) {
    margin: ${({ isPrint }) => (isPrint ? "30px 0px" : null)};
    font-size: 30px;
  }
`;

export const Text = styled.p`
  width: ${({ isPrint }) => (isPrint ? "90%" : "60%")};
  text-align: ${({ isPrint }) => (isPrint ? "center" : "left")};
  font-family: "Elena";
  font-size: ${({ isPrint }) => (isPrint ? "26px" : "21px")};
  letter-spacing: 0.25px;
  line-height: 33px;
  color: white;

  @media only screen and (max-width: 800px) {
    width: 100%;
    font-size: ${({ isPrint }) => (isPrint ? null : "20px")};
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Button = styled.a`
  display: inline-block;
  margin: 20px 0px 40px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-family: "Mija";
  font-size: 24px;
  font-weight: ${({ isPrint }) => (isPrint ? null : "bold")};
  color: #267dcc;
  background-color: white;
  align-self: ${({ isPrint }) => (isPrint ? null : "flex-start")};
  transition: color 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 15px;
  }

  &:hover {
    color: #d33a2c;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  position: relative;
  width: ${({ isPrint }) => (isPrint ? "900px" : "260px")};
  max-width: 100%;
  position: ${({ isPrint }) => (isPrint ? null : "absolute")};
  right: ${({ isPrint }) => (isPrint ? null : "70px")};
  top: ${({ isPrint }) => (isPrint ? null : "-40px")};

  &::before {
    content: "";
    position: absolute;
    display: ${({ isPrint }) => (isPrint ? "none" : "block")};
    left: -20%;
    bottom: -20px;
    width: 125%;
    height: 30px;
    background: radial-gradient(
      farthest-side at 50% 50%,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    );
  }

  @media only screen and (max-width: 1000px) {
    max-width: ${({ isPrint }) => (isPrint ? null : "160px")};
    top: ${({ isPrint }) => (isPrint ? null : "60px")};
  }

  @media only screen and (max-width: 800px) {
    position: ${({ isPrint }) => (isPrint ? null : "relative")};
    right: ${({ isPrint }) => (isPrint ? null : "0px")};
    top: ${({ isPrint }) => (isPrint ? null : "0px")};
    margin: ${({ isPrint }) => (isPrint ? null : "30px 30px 30px 90px")};
    order: ${({ isPrint }) => (isPrint ? null : "-1")};
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  transform-origin: ${({ isPrint }) => (isPrint ? null : "0% 100%")};
  transform: ${({ isPrint }) => (isPrint ? null : "rotate(-10deg)")};
  transition: 0.3s ease-in-out;

  &:hover {
    transform: ${({ isPrint }) => (isPrint ? null : "rotate(0deg)")};
  }
`;
