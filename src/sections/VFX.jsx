import React from 'react';
import Section from 'components/Section';
import GradientTitle from 'components/GradientTitle';
import ItemGrid from 'components/ItemGrid';
import {Video} from "components/Video";

const VIDEOS = [
  'jJxXWvMNSrs',
  'a0Y7SfvxRcI',
  'w6V8GMbSMv4',
  'vz3rhLgcUwI',
  'bNrFcxd4OVw',
  'SsFS1msCGOc',
  '9K2JwBQSm14',
];

const VFX = () => (
  <Section>
    <GradientTitle start="#4b2380" stop="#6872e0">
      VFX
    </GradientTitle>
    <ItemGrid>
      {VIDEOS.map((link) => (
        <Video key={link} ytLink={link} />
      ))}
    </ItemGrid>
  </Section>
);

export default VFX;
