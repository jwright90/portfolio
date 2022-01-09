import React from 'react'
import AboutSection from '../components/AboutSection';
import { Container } from 'react-bootstrap';

const AboutPage = () => {

  const svgStyle = {
    maxWidth: "1100px"
  }

  return (
    <Container className="p-4">
      <h1 className="my-4">About Me</h1>
      <AboutSection svgStyle="chessSVG" year="1995 - 2005" style={svgStyle}>
        I’ve always loved solving problems and thinking "outside of the box". Growing up, I played chess for England.
      </AboutSection>
      <AboutSection svgStyle="mathSVG" rowStyle="flex-row-reverse" year="2006 - 2011" style={svgStyle}>
        I studied Maths, Physics and Electronics at college, followed by Maths at Leeds University. Logical thinking has always come naturally to me.
      </AboutSection>
      <AboutSection svgStyle="pokerSVG" year="2011 - 2013" style={svgStyle}>
        Being a bit of a rebel and a know-it-all, I dropped out of Uni to play online poker for a living. It went well unti the market became saturated, players got tougher, and the government cracked down (heavy regulations and high taxes).
      </AboutSection>
      <AboutSection svgStyle="accountingSVG" rowStyle="flex-row-reverse" year="2013 - 2021" style={svgStyle}>
        It was time to find a 9-5. Zero work experience on my CV didn't help. I started off by volunteering at a local charity in the accounts department. From there I gained experience and eventually decided I may as well get my "piece of paper". I started training to become a CIMA qualified management accountant in 2017 and qualified in 2021.
      </AboutSection>
      <AboutSection svgStyle="codingSVG"  year="2013 - 2021" style={svgStyle}>
        If you take a peek at my Github profile, you'll see that I signed up in 2013. Back then I was following Ruby on Rails zombie app tutorials on Code Academy. I dabbled around, coding on and off over the years. It's now 2021 and I've decided to take coding more seriously. 
      </AboutSection>
      <AboutSection svgStyle="futureSVG" rowStyle="flex-row-reverse" year="Future Me" style={svgStyle}>
        At the moment I'm focusing on developing my front end skills using React. My ultimate goal is to be a full stack developer. Recently, I've been using Next.js with Strapi as a headless CMS for most of my projects.
      </AboutSection>
    </Container>
  )
}

export default AboutPage
