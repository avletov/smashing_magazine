import styled from "styled-components";

export const ArticleLink = styled.a`
  display: block;
  width: 50%;
  height: 500px;
  padding: 60px;
  box-sizing: border-box;
  font-family: "Mija";
  color: white;
  background-color: ${({ id, isRedVersion }) => {
    switch (id) {
      case "02":
        return "rgb(199, 55, 42)";
      case "03":
        return "rgb(177, 49, 37)";
      default:
        return "rgb(188, 52, 40)";
    }
  }};
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: white;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  margin: 30px;
  transition: background 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 65px;
    display: block;
    height: 16px;
    width: 100px;
    background: radial-gradient(
      farthest-side at 50px 8px,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    );
  }

  &:hover::before {
    background: none;
  }
`;

export const Photo = styled.div`
  height: 60px;
  width: 60px;
  border: 5px solid white;
  border-radius: 10px;
  transform-origin: 0% 100%;
  transform: rotate(-10deg);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(0deg);
  }
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Wrote = styled.span`
  font-family: "Elena";
  font-weight: 100;
  font-style: italic;
`;

export const Content = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const HashtagsList = styled.ul`
  display: flex;
  padding: 50px 0px;
  font-size: 16px;
  font-weight: bold;
`;

export const Hashtag = styled.li`
  padding-right: 20px;
`;

export const HashtagLink = styled.a`
  color: white;
`;
