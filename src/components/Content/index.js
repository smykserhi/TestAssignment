import styled, { keyframes } from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
import { useState } from "react";

const ArrowAnime = keyframes`
{
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateX(30px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateX(38px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateX(80px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }  
}
`
const ContentContainer = styled.div`
    border: green solid 1px;
    height: 70vh;
    min-height: 40rem;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media (max-width: 968px){
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
    
`

const Hadline = styled.h1`
    border: red 1px solid;
    height: max-content;
    width: 30%;
    font-size: 5rem;
    margin: 4rem 2rem;
    @media (max-width: 968px){
     width: 80%;
     margin: 2rem 0;
    }
    @media (max-width: 640px){
      width: 100%;
     }
`
const Subhead = styled.h3`
    border: red 1px solid;
    height: max-content;
    width: 25%;
    font-size: 2rem;
    margin: 4rem 2rem;
    @media (max-width: 1024px){
      width: 35%;
    }
    @media (max-width: 968px){
      width: 80%;
      margin: 2rem 0;
     }
     @media (max-width: 640px){
      width: 100%;
     }
`
const Button = styled.div`    
    position: absolute;
    bottom: -1.9%;
    width: 95%;
    margin: 0 2rem;
    background-color: #ffffff;
    height: 30%;
    /*transform: translateY(10px);*/
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #d5992e;
      }
    border-radius: 5px 5px 0 0;
    @media (max-width: 1024px){
      flex-direction: column;
      justify-content: center;
    }
`
const ButtonText = styled.div`
    color: black;
    font-size: 2rem;
    font-weight: 700;
    @media (max-width: 1224px){
      font-size: 1.8rem;
    }
    @media (max-width: 968px){
      font-size: 1.5rem;
      text-align: center;
    }
`
const ButtonArrow = styled.div`
    color: black;
    font-size: 1.3rem;
    font-weight: 500;
    height: 1.5rem;
    @media (max-width: 1024px){
      margin-top: 2rem;
    }
`
const StyledArrowRight = styled(ArrowRight)`
    height: 200%;
    transform: translateY(-2px);
    margin-left: 2rem;
    color: ${props => props.active ? "#fff" : "#d5992e"};
    animation: ${props => props.active ? ArrowAnime : ""}  2s both infinite;
`

const Content = ({ menueOnClick ,content}) => {
  const [active, setActive] = useState(false)
  return (
    <ContentContainer>
      <Hadline>{content.blocks[0].headline}</Hadline>
      <Subhead>{content.blocks[0].subhead} </Subhead>
      <Button id="letsTalk" onClick={menueOnClick} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <ButtonText>{content.blocks[0].cta}</ButtonText>
        <ButtonArrow >LET'S TALK <StyledArrowRight active={active} /></ButtonArrow>
      </Button>
    </ContentContainer>
  );
};

export default Content;
