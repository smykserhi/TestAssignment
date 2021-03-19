import styled, { keyframes } from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
import { useState , useEffect} from "react";

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
const HeadAnimetion = keyframes`
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`
const HeadAnimetion2 = keyframes`
  0% {
    transform: translateX(-999px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`
const SubHeadAnimetion = keyframes`
  0% {
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`
const SubHeadAnimetion2 = keyframes`
  0% {
    transform: translateX(999px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`
const ContentContainer = styled.div`
    min-height: 70vh;
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
    height: max-content;
    width: 40%;
    font-size: 5rem;
    margin: 2rem 2rem 10rem;
    animation: ${props=>props.anime? HeadAnimetion:HeadAnimetion2} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    @media (max-width: 968px){
     width: 80%;
     margin: 2rem 0;
     text-align: center;
     magrin-bottom: 1rem;
     font-size: 4rem;
    }
    @media (max-width: 640px){
      width: 100%;
      font-size: 3rem;
     }
`
const Subhead = styled.h4`    
    height: max-content;
    width: 40%;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 4rem 2rem 10rem;
    animation: ${props=>props.anime? SubHeadAnimetion:SubHeadAnimetion2} 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    @media (max-width: 1024px){
      width: 35%;
    }
    @media (max-width: 968px){
      width: 80%;
      margin: 2rem 0 10rem;
      text-align: center;
           
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
    height: 10rem;
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
      margin-top: 1rem;
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
  const [anime, setAnime]= useState(false)

  useEffect(()=>{
    setAnime(!anime)
  },[content])
  
  return (
    <ContentContainer>
      <Hadline anime={anime}>{content.blocks[0].headline}</Hadline>
      <Subhead anime={anime}>{content.blocks[0].subhead} </Subhead>
      <Button id="letsTalk" onClick={menueOnClick} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <ButtonText>{content.blocks[0].cta}</ButtonText>
        <ButtonArrow >LET'S TALK <StyledArrowRight active={active} /></ButtonArrow>
      </Button>
    </ContentContainer>
  );
};

export default Content;
