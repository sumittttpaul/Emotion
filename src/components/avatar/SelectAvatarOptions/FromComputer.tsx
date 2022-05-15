import { Button, styled } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {}

/**
 * @author
 * @function @FromComputer
 **/

const Input = styled('input')({
  display: 'none',
});

export const FromComputer: FC<IProps> = (props) => {
  return (
    <div className="sm:h-[500px] overflow-auto p-6 space-y-4 h-full w-full items-center justify-center flex flex-col">
      {/* Heading */}
      <div className="space-y-1">
        <h6 className="text-sm font-medium w-full text-center">
          Upload your Image
        </h6>
        <h6 className="text-[11px] font-normal w-full text-center">
          Only PNG, JPG and JPGE files are allowed
        </h6>
      </div>
      {/* Main */}
      <label
        htmlFor="icon-button-file"
        className="w-full flex justify-center items-center"
      >
        <Input accept="image/*" id="icon-button-file" type="file" />
        <Button
          disableRipple
          sx={{
            '&': {
              border: '2px dashed rgba(0,0,0,0.2)',
            }
          }}
          component="span"
          className="button-text-lower p-6 bg-transparent text-[rgba(0,0,0,0.5)] w-full max-w-[350px] rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex flex-col space-y-2 items-center justify-center">
            <Image
              height={60}
              width={60}
              className="opacity-30"
              src="/icons/upload-cloud.svg"
              alt="trash icon"
            />
            <h6 className="text-[13px]">Choose a file to upload</h6>
          </div>
        </Button>
      </label>
    </div>
  );
};
