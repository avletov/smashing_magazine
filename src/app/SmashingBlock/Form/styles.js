import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  order: 2;
  max-width: 90%;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
}
`;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 250px;
  height: 60px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: 1px solid rgb(220, 220, 220);
  background-color: white;
  cursor: pointer;
`;

export const Placeholder = styled.span`
  display: flex;
  position: absolute;
  width: 100%;
  height: ${({ isFocus }) => (isFocus ? "33%" : "100%")};
  padding: 15px;
  box-sizing: border-box;
  align-items: center;
  font-family: 'Elena';
  font-size: ${({ isFocus }) => (isFocus ? "14px" : "18px")};
  color: #666;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    font-size: ${({ isFocus }) => (isFocus ? "12px" : "14px")};
  }

  @media only screen and (max-width: 350px) {
    font-size: ${({ isFocus }) => (isFocus ? "10px" : "12px")};
  }
}
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  padding: 30px 15px 15px;
  box-sizing: border-box;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  outline: none;
  font-family: "Elena";
  font-size: 18px;
`;

export const Button = styled.a`
  display: inline-flex;
  padding: 0px 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
  font-family: "Mija";
  font-size: 20px;
  font-weight: bold;
  color: rgb(38, 125, 204);
  background-color: white;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    padding: 0px 10px;
    font-size: 16px;
    flex-shrink: 0;
  }

  &:hover {
    color: #d33a2c;
  }
`;
