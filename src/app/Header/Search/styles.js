import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.display};
  width: 90%;
  margin-top: 20px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  transform: translateY(20px);
  animation: search 0.5s ease-in-out forwards;

  @keyframes search {
    to {
      transform: translateY(0px);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 0px 60px;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: "Elena";
  font-size: 24px;
`;

export const SearchBy = styled.svg`
  align-self: flex-end;
  margin: 10px;
  width: 130px;
  height: 18px;
`;
