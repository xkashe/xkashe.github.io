import React from 'react';
import styled from 'styled-components';
import Section, { FwSection } from 'components/Section';
import GradientTitle from 'components/GradientTitle';

import profil from 'res/profil.jpg';
import ae from 'res/skills/ae.png';
import ai from 'res/skills/ai.png';
import au from 'res/skills/au.png';
import lr from 'res/skills/lr.png';
import pr from 'res/skills/pr.png';
import ps from 'res/skills/ps.png';

const AboutCard = styled.div`
  border-radius: 2em;
  width: 100%;
  max-width: 800px;
  background: #f1f1f1;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0.5em 2em 0 #0003;
  margin: 1em auto;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  min-height: 15em;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  padding: 3em;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  font-size: 0.75em;
  line-height: 1.75em;
  color: #5F5E61;
`;

const CardText = styled.span`
  text-align: left;
`;

const AboutContent = styled(FwSection)`
  background-image: linear-gradient(to top, #15282f 0%, transparent 75%);
`;

const SkillsContainer = styled.div`
  width: 100%;
  background-color: #0001;
  border-radius: 1.5em;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5em;
`;

const Skill = styled.img`
  max-height: 4em;
  max-width: 4em;
  margin: 0.5em;
`;

const SkillTitle = styled.span`
  margin-top: 1em;
  font-weight: bold;
`;

const About = () => (
  <AboutContent>
    <Section>
      <GradientTitle start="#f28e26" stop="#fd644f">
        O mnie
      </GradientTitle>
      <AboutCard>
        <ImageContainer>
          <img src={profil} alt="zdjęcie profilowe" />
        </ImageContainer>
        <CardContent>
          <CardText>
            Nazywam się <b>Łukasz Jurczyński</b>.
            
            Jestem absolwentem Montażu Filmowego w Warszawskiej Szkole Filmowej (licencjat 2022).
            Atualnie studiuję Projektowanie komunikacji wizualnej w mediach interaktywnych.
            Specjalizuję się w montowaniu filmów przeznaczonych na Youtube oraz obróbką zdjęć.
            
          </CardText>

          <SkillTitle>Regularnie pracuję z:</SkillTitle>
          <SkillsContainer>
            <Skill src={pr} alt="Adobe Premiere" />
            <Skill src={ps} alt="Adobe Photoshop" />
            <Skill src={ae} alt="Adobe After Effects" />
          </SkillsContainer>

          <SkillTitle>a także:</SkillTitle>
          <SkillsContainer>
            <Skill src={lr} alt="Adobe Lightroom" />
            <Skill src={ai} alt="Adobe Illustrator" />
            <Skill src={au} alt="Adobe Audition" />
          </SkillsContainer>
        </CardContent>
      </AboutCard>
    </Section>
  </AboutContent>
);

export default About;
