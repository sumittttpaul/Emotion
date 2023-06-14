import styled from '@emotion/styled';
import { TooltipProps, Tooltip, tooltipClasses } from '@mui/material';
import React from 'react';

/**
 * @author
 * @function @TooltipDark
 **/

export const TooltipDark = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#353535',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#353535',
    fontSize: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 6,
  },
}));
