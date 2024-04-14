import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Theme'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
${'' /* color: ${props => props.theme.body}; */}

display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin:0 auto;
${'' /* background-color: lightblue; */}
display: flex;
justify-content: center;
align-items:center;
`
const Box = styled.div`
width:50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
${'' /* color:${(props) => props.theme.body}; */}
color:#5c5cd6;
align-self: flex-start;
width: 80%;
margin: 0 auto;
`
const SubText = styled.p`
font-size: ${(props) => props.theme.fontlg};
${'' /* text-transform: capitalize; */}
color:${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
`
const SubTextLight = styled.p`
font-size: ${(props) => props.theme.fontmd};
${'' /* text-transform: capitalize; */}
color:${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
 ul {
    list-style-type: none;
    padding: 0;
  }

   li {
    margin-bottom: 0.5rem; /* Adjust the spacing between bullet points as needed */
  }

  li::before {
    
    margin-right: 0.5rem;
  }
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
`
const About = () => {
  return (
    <Section id = "about">
     <Container>
      <Box> <Carousel/> </Box>
      <Box>
      <Title>
      About Us.
      </Title>
      <SubText>
        Our Project  keeps a track of access time and activities performed on a computer system  with the help of MAC addresses.
      </SubText>
      <SubTextLight>
  Our project is a simple and efficient time tracking application that helps you keep track of how much time you spend working in each application.
  <ul>
    <li>Tracks activities performed on the system</li>
    <li>Track time spent in each individual application instance (E.g. Chrome tabs)</li>
    <li>User-friendly interface</li>
    <li>We provide various settings to customize your tracking options</li>
    <li>Save and look back on history</li>
  </ul>
</SubTextLight>
      <ButtonContainer>
        <ThemeProvider theme={dark}>
        <Button text="JOIN OUR DISCORD" link="#"/>
      </ThemeProvider>
      </ButtonContainer>
      </Box>
     </Container>
    </Section>
  )
}

export default About