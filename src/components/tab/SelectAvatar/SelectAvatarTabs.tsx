import styled from '@emotion/styled';
import { Tabs } from '@mui/material';
import React, { FC, ReactNode, SyntheticEvent } from 'react';

interface StyledTabsProps {
  children?: ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

/**
 * @author
 * @function @SelectAvatarTabs
 **/

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    variant="fullWidth"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& ': {
    width: '100%',
    height: 70,
  },
  '& .MuiTabs-indicator': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: 'rgb(56 189 248)',
  },
});

const SelectAvatarTabs: FC<StyledTabsProps> = (props) => {
  return <StyledTabs {...props} />;
};

export default SelectAvatarTabs;
