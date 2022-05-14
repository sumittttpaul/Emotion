import React, { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

/**
 * @author
 * @function @CustomTabPanel
 **/

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tabpanel-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

export default CustomTabPanel;
