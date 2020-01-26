import React from 'react'
import Container from './components/Container'
import Grid from './components/Grid'
import TitleName from './components/TitleName'
import GlobalStyle from './components/GlobalStyle'
import Jumbotron from './components/Jumbotron'
import SkillsAndLiks from './components/SkillsAndLiks'

const skills = ['JavaScript', 'ReactJS', 'TypeScript', 'SASS', 'NodeJS', 'PHP']

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/deadkff01'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/dennis-kaffer-474366ba'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/dennis.kaffer'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/denniskaffer'
  }
]

const App = () => (
  <>
    <GlobalStyle />
    <Grid>
      <TitleName>Deadkff01</TitleName>
    </Grid>
    <Container>
      <Jumbotron>
        My name is Dennis Kaffer, and I'm a Front-End developer, I just love this profession and the Tron movie series,
        and that's why this page has been made this way.
        <br />
        Below, you'll get more informations about my skills and how to find me.
      </Jumbotron>
    </Container>

    <Container>
      <SkillsAndLiks skills={skills} links={links} />
    </Container>
  </>
)

export default App
