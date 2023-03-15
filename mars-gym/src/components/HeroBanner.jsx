import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'},
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#f04c4d' fontWeight='600' fontSize='26px'>
        Mars Gym
      </Typography>
      <Typography
        fontWeight={700}
        sx={{fontSize: {lg: '44px', xs: '40px'}}}
        mb='23px'
        mt='30px'
      >
        Show up, Work <br /> and Repeat
      </Typography>
      <Typography fontSize='20px' lineHeight='35px' mb={4}>
        What workout are you doing today?
      </Typography>
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{
          backgroundColor: '#f04c4d',
          padding: '10px',
        }}
      >
        Explore exercises
      </Button>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'},
        }}
        fontSize='200px'
      >
        Discipline
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
