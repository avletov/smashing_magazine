import styled from "styled-components";

export const ArticleLink = styled.a`
  position: relative;
  display: block;
  width: 50%;
  padding: 60px;
  padding-top: ${({ id }) => {
    switch (id) {
      case "01":
      case "02":
        return "200px";
      default:
        return null;
    }
  }};
  box-sizing: border-box;
  font-family: "Mija";
  color: white;
  background-color: ${({ id, isRedVersion }) => {
    switch (id) {
      case "02":
        return isRedVersion ? "rgb(199, 55, 42)" : "rgb(252, 250, 253)";
      case "03":
        return isRedVersion ? "rgb(177, 49, 37)" : "rgb(242, 240, 243)";
      default:
        return isRedVersion ? "rgb(188, 52, 40)" : "rgb(246, 244, 247)";
    }
  }};
  transition: min-height padding-top background-color 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding-top: ${({ id }) => (id === "02" ? "60px" : null)};
    padding-left: 30px;
    padding-right: 30px;
  }

  &::after {
    content: "→";
    position: absolute;
    left: 60px;
    bottom: 40px;
    font-size: 40px;
  }
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
  background: ${({ photo }) => photo} no-repeat center;
  background-size: cover;

  &:hover {
    transform: rotate(0deg);
  }
`;

export const Name = styled.span`
  font-weight: bold;
  color: ${({ isRedVersion }) => (isRedVersion ? null : "rgb(211, 58, 54)")};
  transition: all 0.3s ease-in-out;
`;

export const Wrote = styled.span`
  font-family: "Elena";
  font-weight: 100;
  font-style: italic;
  padding-left: 5px;
  color: ${({ isRedVersion }) => (isRedVersion ? null : "rgb(61, 61, 61)")};
  transition: all 0.3s ease-in-out;
`;

export const Content = styled.span`
  margin-right: 10px;
  font-size: 40px;
  font-weight: bold;
  color: ${({ isRedVersion }) => (isRedVersion ? null : "rgb(61, 61, 61)")};
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

export const Comments = styled.a`
  display: inline-flex;
  height: 40px;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: ${({ isRedVersion }) => (isRedVersion ? "white" : "rgb(61, 61, 61)")};
  transition: all 0.3s ease-in-out;

  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…AxLTMgM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzYuMzMgLTIzMS4zMykiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;
  }
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

export const HashtagId = styled.sup``;

export const HashtagLink = styled.a`
  color: ${({ isRedVersion }) => (isRedVersion ? "white" : "rgb(61, 61, 61)")};
  transition: all 0.3s ease-in-out;

  &::before {
    content: "#";
    margin-right: 5px;
    color: ${({ isRedVersion }) =>
      isRedVersion ? "black" : "rgb(61, 61, 61)"};
    transition: all 0.3s ease-in-out;
  }
`;
