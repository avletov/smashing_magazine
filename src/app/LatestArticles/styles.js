import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
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
`;
