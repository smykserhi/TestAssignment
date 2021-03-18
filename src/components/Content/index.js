import styled from "styled-components";
import {ArrowRight} from "@styled-icons/bootstrap/ArrowRight"

const ContentContainer = styled.div`
    border: green solid 1px;
    height: 70vh;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    position: relative;
`;

const Hadline = styled.h1`
    border: red 1px solid;
    height: max-content;
    width: 30%;
    font-size: 5rem;
    margin: 2rem 0;
`;
const Subhead = styled.h3`
    border: red 1px solid;
    height: max-content;
    width: 25%;
    font-size: 2rem;
    margin: 2rem 0;
`;
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
    &:hover {
        background-color: #d5992e;
      }
    border-radius: 5px 5px 0 0;
`;
const ButtonText = styled.div`
    color: black;
    font-size: 2rem;
    font-weight: 700;
`
const ButtonArrow = styled.div`
    color: #1b2733;
    font-size: 1.3rem;
    font-weight: 500;
    height: 1.5rem;;
`
const StyledArrowRight = styled(ArrowRight)`
    height: 200%;
    transform: translateY(-2px);
    margin-left: 2rem;
    color: #d5992e;
`

const Content = () => {
  return (
    <ContentContainer>
      <Hadline>Industries</Hadline>
      <Subhead>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus.
      </Subhead>
      <Button>
          <ButtonText>Vestibulum id ligula porta felis euismod semper.</ButtonText>
          <ButtonArrow>LET'S TALK <StyledArrowRight/></ButtonArrow>
          </Button>
    </ContentContainer>
  );
};

export default Content;
