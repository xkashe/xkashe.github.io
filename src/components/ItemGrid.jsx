import React, { useState } from 'react';
import styled from 'styled-components';

const ItemGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const ShowMoreButton = styled.div`
  background-color: #0002;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  margin-top: 0.5em;
  cursor: pointer;
  transition: transform 0.2s ease;
  font-size: 0.9em;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: 'więcej';
  }
`;

const ItemGrid = ({ children }) => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <ItemGridContainer>
        {children && children.slice(0, 4)}
        {isExpanded && children && children.slice(4)}
      </ItemGridContainer>
      {!isExpanded && <ShowMoreButton onClick={() => setExpanded(true)} />}
    </>
  );
};

export default ItemGrid;
