import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  order: ${({ order }) => (order ? order : null)};
  width: ${({ isSecond }) => (isSecond ? "60%" : "100%")};
  flex-direction: column;
  margin: ${({ isSecond }) => (isSecond ? "30px 0px 30px 30px" : null)};
  padding: 20px 20px 40px 20px;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(211, 58, 44);

  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin: ${({ isSecond }) => (isSecond ? " 30px 0px" : null)};
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Illustration = styled.img`
  width: 253px;
  height: 243px;
`;

export const Title = styled.a`
  display: inline;
  max-width: 475px;
  text-align: center;
  font-family: "Mija";
  font-weight: bold;
  font-size: 40px;
  color: #fff;
  text-shadow: 3px 0 #d33a2c, 2px 0 #d33a2c, 1px 0 #d33a2c, -1px 0 #d33a2c,
    -2px 0 #d33a2c, -3px 0 #d33a2c;
  text-decoration: underline;
  text-decoration-color: #e58980;
  text-decoration-skip-ink: none;
}
`;

export const Text = styled.p`
  max-width: 475px;
  margin: 25px 0px;
  text-align: center;
  font-family: "Elena";
  font-size: 21px;
  line-height: 35px;
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
  margin: 25px 0px;
  font-family: "Elena";
  font-size: 16px;
  color: white;
`;

export const Link = styled.a`
  text-shadow: 3px 0 #d33a2c, 2px 0 #d33a2c, 1px 0 #d33a2c, -1px 0 #d33a2c,
    -2px 0 #d33a2c, -3px 0 #d33a2c;
  background-image: linear-gradient(transparent 16px, #e58980 3px);
  background-size: 100% 19px;
  color: white;
`;
