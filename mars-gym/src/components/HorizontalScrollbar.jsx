import React from 'react';
import {Box} from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu m='0 auto'>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m='0 30px'
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
