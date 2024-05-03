'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { toast } from 'sonner';

export function Demo() {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Slider color='primary' />
      <Slider color='secondary' />
      <Slider color='info' />
      <Slider color='success' />
      <Slider color='warning' />
      <Slider color='error' />

      <Button onClick={() => toast.success('My success toast')}>Button</Button>
    </Box>
  );
}
