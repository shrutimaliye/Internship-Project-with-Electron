import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { light } from "./styles/Theme";
import About from "./components/sections/About";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <>
    <GlobalStyles/>
    <ThemeProvider theme={light}>
    <Navigation />
    <Home/>
    <About/>
    <Roadmap/>
    <Showcase/>
    <Team/>
    <Faq/>
    <Footer/>
    <ScrollToTop/>
    </ThemeProvider>
      
    </>
  );
}

export default App;
