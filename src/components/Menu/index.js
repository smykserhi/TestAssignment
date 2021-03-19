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
`
const MenuContainer = styled.div`
    width: 7rem;
    text-align: center;
    margin-left: 2rem;
    @media (max-width: 968px){
      /*margin: 0 4rem;*/
      display: flex;
      flex-direction: column;
      align-items: center;
     }
`
const MenuElementsContainer = styled.div`
  margin: 0.5rem 0;
  font-size: larger;
  padding: 0.7rem;
  text-align: left;
  @media (max-width: 968px){
    width: 150%;
    text-align: center;
   }
`
const MenuElement = styled.div`
  cursor: pointer;
  line-height: 2rem;
  transition: all 0.15s;
  &:hover {
    color: #d5992e;
    transform: scale(1.2);
  }
`
const ContactUs = styled.div`
  border: solid 1px white;
  height: max-content;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: all 0.2s;
  &:hover {
    background-color: #d5992e;
    box-shadow: 1px 2px 10px 2px #ccc;
    transform: scale(1.2);
  }
  @media (max-width: 968px){
    align-self: center;
    margin-right: 1rem;   
   }
`

const LogoBox = styled.div`  
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border: 2px #d5995e solid;
    border-radius: 5px;
    transform: scale(1.2);
  } 
`
const Logo = styled.img`
    width: 80%;
    padding: 0.5rem;
    
`

const Menu = ({menueOnClick,data}) => {
  return (
    <Container>
      <MenuContainer>
        <LogoBox >
          <Logo onClick={menueOnClick} id="logoButton" src={logo} alt="logo" />
        </LogoBox>
        <MenuElementsContainer>
          {data.map(el=>(
            <MenuElement key={el.slug} id={el.slug} onClick={menueOnClick} >{el.title}</MenuElement>
          ))}         
        </MenuElementsContainer>
      </MenuContainer>
      <ContactUs onClick={menueOnClick} id="contactUs">Contact US</ContactUs>
    </Container>
  );
};

export default Menu;
