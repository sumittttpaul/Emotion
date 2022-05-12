import { Button } from '@mui/material';
import React, { FC, ReactEventHandler } from 'react';

interface IProps {
  content: string;
  onClick: ReactEventHandler;
}

/**
 * @author
 * @function @LargeButtonBlue
 **/

const LargeButtonBlue: FC<IProps> = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className="bg-[#0074E4] hover:bg-[#0074E4] text-white h-[60px] w-full text-xs transition-colors"
    >
      {props.content}
    </Button>
  );
};

export default LargeButtonBlue;