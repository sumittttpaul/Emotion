import styled from '@emotion/styled';
import { Tab } from '@mui/material';
import React, { FC, ReactElement } from 'react';

interface StyledTabProps {
  label: string;
  icon: ReactElement;
}
/**
 * @author
 * @function @SelectAvatarTabItem
 **/

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.9)',
    '&.Mui-selected': {
      color: '#1A73E8',
    },
    '.MuiTouchRipple-child': {
      backgroundColor: 'rgba(26, 115, 232, 0.25)',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

const SelectAvatarTabItem: FC<StyledTabProps> = (props) => {
  return <StyledTab {...props} />;
};

export default SelectAvatarTabItem;
