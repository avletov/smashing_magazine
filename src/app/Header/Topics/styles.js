import styled from "styled-components";

export const Container = styled.div`
  display: ${props => (props.isShowTopics ? "block" : "none")};
  font-family: "Elena";
  transform: translateY(20px);
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
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  position: relative;
  padding: 5px;

  &::before {
    content: "•";
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(129, 29, 21);
    font-size: 26px;
  }

  &:first-child::before {
    content: "";
  }
`;

export const Link = styled.a`
  display: block;
  position: relative;
  padding: 10px 5px;
  font-size: 26px;
  color: white;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: black;
  }
`;
