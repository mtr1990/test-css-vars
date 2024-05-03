'use client';

import { Height } from '@mui/icons-material';
import Portal from '@mui/material/Portal';
import { styled } from '@mui/material/styles';
import { Toaster as ReactToaster } from 'sonner';

// ----------------------------------------------------------------------

export const StyledToaster = styled(ReactToaster)(({ theme }) => {
  return {
    '& .toaster-classes-icon': {
      backgroundColor: 'red',
      width: 40,
      height: 40,
    },
  };
});

export function Toaster() {
  return (
    <Portal>
      <StyledToaster
        duration={1000000}
        expand
        closeButton
        gap={12}
        offset={16}
        position='top-right'
        toastOptions={{
          classNames: {
            icon: 'toaster-classes-icon',
          },
        }}
      />
    </Portal>
  );
}
