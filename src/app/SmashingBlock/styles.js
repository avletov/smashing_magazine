import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  order: ${({ order }) => (order ? order : null)};
  width: ${({ type }) => {
    switch (type) {
      case "members":
      case "tv":
      case "newsletter":
        return "60%";
    }
  }};
  flex-direction: column;
  margin: ${({ type }) => {
    switch (type) {
      case "members":
        return "30px 0px 0px 30px";
      case "tv":
        return "20px 0px 30px 30px";
      case "newsletter":
        return "20px 0px 50px 30px";
    }
  }};
  padding: 20px 20px 40px 20px;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(211, 58, 44);

  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin: ${({ type }) => {
      switch (type) {
        case "members":
          return "30px 0px";
        case "tv":
          return "0px 0px 50px 0px";
        case "newsletter":
          return "0px 5%";
      }
    }};
  }

  @media only screen and (max-width: 600px) {
    width: ${({ type }) => (type === "newsletter" ? "90%" : "100%")};
    margin: ${({ type }) => {
      switch (type) {
        case "newsletter":
          return "0px";
      }
    }};
  }
`;

export const Illustration = styled.img`
  width: ${({ type }) => {
    switch (type) {
      case "members":
      case "tv":
        return "250px";
      case "newsletter":
        return "460px";
    }
  }};
  max-width: ${({ type }) => (type === "newsletter" ? "90%" : null)};
  margin: ${({ type }) => (type === "newsletter" ? "0px 0px 30px" : null)};
  order: ${({ type }) => {
    switch (type) {
      case "newsletter":
        return "1";
    }
  }};
`;

export const Title = styled.a`
  display: inline;
  max-width: 475px;
  margin-top: ${({ type }) => (type = "newsletter" ? "20px" : null)};
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
  transition: color 0.3s ease-in-out;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 15px;
  }

  &:hover {
    color: #d33a2c;
  }
`;

export const Form = styled.form`
  display: flex;
  order: ${({ type }) => {
    switch (type) {
      case "newsletter":
        return "2";
    }
  }};
}
`;

export const SignIn = styled.span`
  max-width: 330px;
  margin: 25px 0px;
  text-align: center;
  font-family: "Elena";
  font-size: 16px;
  color: white;

  order: ${({ type }) => {
    switch (type) {
      case "newsletter":
        return "3";
    }
  }};
`;

export const Link = styled.a`
  text-shadow: 3px 0 #d33a2c, 2px 0 #d33a2c, 1px 0 #d33a2c, -1px 0 #d33a2c,
    -2px 0 #d33a2c, -3px 0 #d33a2c;
  background-image: linear-gradient(transparent 16px, #e58980 3px);
  background-size: 100% 19px;
  color: white;
`;
