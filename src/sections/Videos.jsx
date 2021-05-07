import React from 'react';
import Section from 'components/Section';
import GradientTitle from 'components/GradientTitle';
import ItemGrid from 'components/ItemGrid';
import {Video} from "components/Video";

const VIDEOS = [
  'twyKbPS72IQ',
  '9K2JwBQSm14',
  'pWck9174UqE',
  'cYJUPdjhAdE',
  'mp7ftGRfxqY',
  'FtKRKuzIkis',
  'uEkFVJJfm7Y',
  'BINDDd5UJMk',
  '3nowEnpg14g',
  'KBy3vrKgh_0',
  '6dBd-ZqT2H0',
  'HsbJJAIYglA',
  'uQrM58B671E',
  'zjJJkKP21bg',
  'p1ZUMPllya4',
  '8TDlN0ZB6_I',
  'rqaxqnE9KGI',
  'rzfM06oyB1U',
];

const Videos = () => (
  <Section>
    <GradientTitle start="#209cff" stop="#68e0cf">
      Montaż wideo
    </GradientTitle>
    <ItemGrid>
      {VIDEOS.map((link) => (
        <Video key={link} ytLink={link}/>
      ))}
    </ItemGrid>
  </Section>
);

export default Videos;
