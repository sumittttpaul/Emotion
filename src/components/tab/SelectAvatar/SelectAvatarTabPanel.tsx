import React, { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

/**
 * @author
 * @function @SelectAvatarTabPanel
 **/

const SelectAvatarTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`avatar-tabpanel-${index}`}
      aria-labelledby={`avatar-tabpanel-${index}`}
      className='w-full h-full'
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export default SelectAvatarTabPanel;
