import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 20px 60px 20px;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(211, 58, 44);
`;

export const Illustration = styled.img`
  width: 253px;
  height: 243px;
`;

export const Membership = styled.a`
  //max-width: 460px;
  text-align: center;
  font-family: "Mija";
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  text-shadow: 3px 0 #d33a2c, 2px 0 #d33a2c, 1px 0 #d33a2c, -1px 0 #d33a2c,
    -2px 0 #d33a2c, -3px 0 #d33a2c;
  background-image: linear-gradient(#e58980, #e58980);
  background-size: 100% 3px;
  background-position: center bottom 25%;
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  max-width: 460px;
  margin: 20px 0px;
  text-align: center;
  font-family: "Elena";
  font-size: 20px;
  color: white;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: "Mija";
  font-size: 20px;
  font-weight: bold;
  color: rgb(38, 125, 204);
  background-color: white;
`;

export const SignIn = styled.span`
  padding: 10px;
  font-family: "Elena";
  font-size: 14px;
  color: white;
`;
