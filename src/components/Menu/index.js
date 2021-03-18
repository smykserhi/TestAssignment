import logo from "../../static/abc_logo.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20vh;
  margin: 2rem 0 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid green;
`;

const MenuContainer = styled.div`
    width: 7rem;
    text-align: center;
`;
const MenuElementsContainer = styled.div`
  margin: 0.5rem 0;
  font-size: larger;
  border : 1px red solid;
  padding: 0.7rem;
  text-align: left;
`;
const MenuElement = styled.div`
  cursor: pointer;
  &:hover {
    color: #d5992e;
  }
`;
const ContactUs = styled.div`
  border: solid 1px white;
  height: max-content;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d5992e;
  }
`;
const LogoBox = styled.div`
  border : 1px red solid;
`;
const Logo = styled.img`
    width: 80%;
    padding: 0.5rem;
`;

const Menu = () => {
  return (
    <Container>
      <MenuContainer>
        <LogoBox>
          <Logo src={logo} alt="logo" />
        </LogoBox>
        <MenuElementsContainer>
          <MenuElement>Industries</MenuElement>
          <MenuElement>Services</MenuElement>
          <MenuElement>About Us</MenuElement>
        </MenuElementsContainer>
      </MenuContainer>
      <ContactUs>Contact US</ContactUs>
    </Container>
  );
};

export default Menu;
