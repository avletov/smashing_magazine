import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  padding: 35px 0px 0px;
  flex-direction: column;
  align-items: center;
  font-family: "Mija";
  color: white;
  background-color: rgb(211, 58, 44);
`;

export const Title = styled.h2`
  font-family: "Elena";
  font-size: 15px;
  color: white;
  background-color: rgb(211, 58, 44);
`;

export const Main = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    padding-bottom: 180px;
  }
`;

export const Img = styled.img`
  width: 25%;
  padding: 5%;
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ImgBottom = styled.img`
  position: absolute;
  width: 210px;
  left: 20px;
  bottom: 15px;
  display: none;

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

export const Content = styled.div`
  width: 50%;

  @media only screen and (max-width: 1000px) {
    width: 540px;
  }
`;

export const Notes = styled.div`
  font-family: "Elena";
`;

export const Note = styled.p`
  margin: 0px;
  padding: 5px;
  text-align: center;
  font-size: 17px;
  color: white;
`;

export const NoteLink = styled.a`
  text-decoration: underline;
  color: white;
`;

export const NoteSpan = styled.a`
  font-style: italic;
  color: white;
`;

export const Links = styled.ul`
  margin: 30px 2%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin: 0px 8px;
`;

export const ItemLink = styled.a`
  display: inline-block;
  padding: 10px 0px;
  font-family: "Elena";
  font-size: 17px;
  text-decoration: underline;
  color: white;
`;
