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
    color: '#000000e6',
    '&.Mui-selected': {
      color: '#1A73E8',
    },
    '.MuiTouchRipple-child': {
      backgroundColor: '#1a73e840 !important',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#645fe452 !important',
    },
  })
);

const SelectAvatarTabItem: FC<StyledTabProps> = (props) => {
  return <StyledTab {...props} />;
};

export default SelectAvatarTabItem;
