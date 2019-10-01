import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.isShowTopics ? "block" : "none")};
  font-family: "Elena";
  transform: translateY(50px);
  animation: all-topics 0.5s ease-in-out forwards;

  @keyframes all-topics {
    to {
      transform: translateY(0px);
    }
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
  font-size: 20px;
`;

export const List = styled.ul`
  display: flex;
  margin: 5%;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (max-width: 700px) {
    justify-content: flex-start;
  }
`;

export const Item = styled.li`
  position: relative;
  padding: 5px;

  @media only screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    width: 50%;
    padding: 0px;
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

  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }

  &:hover {
    color: black;
  }
`;
