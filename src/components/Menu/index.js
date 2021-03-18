import React from "react"
import logo from "../../static/abc_logo.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20vh;
  min-height: 10rem;
  margin: 2rem 0 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid green;
`

const MenuContainer = styled.div`
    width: 7rem;
    text-align: center;
    @media (max-width: 968px){
      margin: 0 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
     }
`;
const MenuElementsContainer = styled.div`
  margin: 0.5rem 0;
  font-size: larger;
  border : 1px red solid;
  padding: 0.7rem;
  text-align: left;
  @media (max-width: 968px){
    width: 150%;
    text-align: center;
   }
`;
const MenuElement = styled.div`
  cursor: pointer;
  line-height: 2rem;
  transition: color 0.1s;
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
  transition: background-color 0.2s;
  &:hover {
    background-color: #d5992e;
  }
  @media (max-width: 968px){
    align-self: center;
    margin: 3rem;
   }
`;
const LogoBox = styled.div`
  border : 1px red solid;
`;
const Logo = styled.img`
    width: 80%;
    padding: 0.5rem;
`;

const Menu = ({menueOnClick,data}) => {
  return (
    <Container>
      <MenuContainer>
        <LogoBox>
          <Logo src={logo} alt="logo" />
        </LogoBox>
        <MenuElementsContainer>
          {data.map(el=>(
            <MenuElement key={el.slug} id={el.slug} onClick={menueOnClick} >{el.title}</MenuElement>
          ))}

          {/* <MenuElement id="One" onClick={menueOnClick} >Industries</MenuElement>
          <MenuElement id="Two" onClick={menueOnClick} >Services</MenuElement>
          <MenuElement id="thre" onClick={menueOnClick}>About Us</MenuElement> */}
        </MenuElementsContainer>
      </MenuContainer>
      <ContactUs onClick={menueOnClick} id="contactUs">Contact US</ContactUs>
    </Container>
  );
};

export default Menu;
