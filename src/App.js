import { useState, useEffect } from "react";
import dataJson from "./static/data.json";
import styled from "styled-components";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Background_one from "./static/backgrounds/slide_one.jpg";
import Background_two from "./static/backgrounds/slide_two.jpg";
import Background_three from "./static/backgrounds/slide_three.jpg";

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-width: 1920px;
  color: white;
  background: url(${props => props.background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;  
`
const ElementContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const backgrounds = [Background_one, Background_two, Background_three];


  useEffect(() => {
    if (loading) { // Data loading from API
      // fetch(
      //   "https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json"
      // )
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw Error(res.statusText);
      //     }
      //     return res.json();
      //   })
      //   .then((res) => {
      //     setLoading(false);
      //     setData(res);
      //   })
      //   .catch((error) => console.error(error));
      setLoading(false);
      setData(dataJson.pages);
    }
  }, [loading]);

  //Main onClick event function
  const menueOnClick = (event) => {    
    switch (event.target.id) {
      case "industries":
        setCurrentPage(0)
        break
      case "services":
        setCurrentPage(1)
        break
      case "about-us":
        setCurrentPage(2)
        break
      case "contactUs":
        console.log("Clicked Contact US")
        break
      case "letsTalk":
        console.log("Clicked Let's Talk")
        break
      case "logoButton":
        console.log("Clicked logoButton")
        break
      default:
        console.log("Default click")
    }
  }

  return (
    <>
      {!loading ? <MainContainer background={backgrounds[currentPage]}>
        <ElementContainer>
          <Menu data={data} menueOnClick={menueOnClick} />
          <Content content={data[currentPage]} menueOnClick={menueOnClick} />
        </ElementContainer>
      </MainContainer> : ""}
    </>
  );
}

export default App;
