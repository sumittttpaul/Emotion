import React, { ReactNode } from 'react';

interface TabPanelProps {
  children: ReactNode;
  dir?: string;
  index: number;
  value: number;
}

/**
 * @author
 * @function @AuthTabPanel
 **/

export const AuthTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tabpanel-${index}`}
      className="w-full h-full"
      {...other}
    >
      {value === index && children}
    </div>
  );
};