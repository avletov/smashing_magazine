import styled from "styled-components";

export const Container = styled.div`
  display: ${({ location, isShowTopics }) =>
    isShowTopics ? "block" : location === "footer" ? "block" : "none"};
  font-family: "Elena";
  transform: ${({ location }) =>
    location === "header" ? "translateY(50px)" : null};
  animation: ${({ location }) =>
    location === "header" ? "all-topics 0.5s ease-in-out forwards" : null};

  @keyframes all-topics {
    to {
      transform: translateY(0px);
    }
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: ${({ location }) =>
    location === "header" ? "50px 0px" : "30px 0px"};
  font-size: ${({ location }) => (location === "header" ? "20px" : "15px")};
  font-weight: ${({ location }) => (location === "header" ? null : "bold")};
  letter-spacing: ${({ location }) => (location === "header" ? null : "1px")};

  @media only screen and (max-width: 600px) {
    margin: ${({ location }) =>
      location === "header" ? "20px 0px" : "30px 20px"};
  }
`;

export const List = styled.ul`
  display: flex;
  margin: ${({ location }) => (location === "header" ? "5%" : "3%")};
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 700px) {
    justify-content: flex-start;
    margin-left: 10%;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 5px;
  box-sizing: border-box;

  @media only screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    width: 50%;
    padding: 0px 5px;
    float: left;
    text-align: left;
  }

  &::before {
    content: "•";
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(129, 29, 21);
    font-size: 26px;

    @media only screen and (max-width: 700px) {
      left: -10px;
    }
  }

  &:first-child::before {
    content: "";

    @media only screen and (max-width: 700px) {
      content: "•";
    }
  }
`;

export const Link = styled.a`
  display: block;
  position: relative;
  padding: 10px 5px;
  font-size: 26px;
  color: white;
  transition: color 0.1s ease-in-out;

  @media only screen and (max-width: 1000px) {
    font-size: ${({ location }) => (location === "header" ? null : "20px")};
    padding: ${({ location }) => (location === "header" ? null : "5px")};
  }

  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }

  &:hover {
    color: black;
  }
`;
