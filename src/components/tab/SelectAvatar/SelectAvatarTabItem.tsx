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

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(() => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: 14,
  color: '#ffffff90',
  '&.Mui-selected': {
    color: 'rgb(56 189 248)',
  },
  '.MuiTouchRipple-child': {
    backgroundColor: '#ffffff50 !important',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#ffffff00 !important',
  },
}));

const SelectAvatarTabItem: FC<StyledTabProps> = (props) => {
  return <StyledTab {...props} />;
};

export default SelectAvatarTabItem;
