import { Button, styled } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';

interface IProps {
  show: () => void;
  getURL: (value: string) => void;
}

/**
 * @author
 * @function @FromComputer
 **/

const Input = styled('input')({
  display: 'none',
});

const FromComputer: FC<IProps> = (props) => {
  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      props.getURL(URL.createObjectURL(file));
      props.show();
    }
  };

  return (
    <div className="box-border scroll-smooth overflow-auto p-6 space-y-4 h-full w-full items-center justify-center flex flex-col">
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
        htmlFor="UploadImageInput"
        className="w-full flex justify-center items-center"
      >
        <Input
          onChange={handleUpload}
          accept="image/*"
          id="UploadImageInput"
          type="file"
        />
        <Button
          disableRipple
          sx={{
            '&': {
              border: '2px dashed rgba(0,0,0,0.2)',
            },
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
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' class='feather feather-upload-cloud'%3E%3Cpolyline points='16 16 12 12 8 16'%3E%3C/polyline%3E%3Cline x1='12' y1='12' x2='12' y2='21'%3E%3C/line%3E%3Cpath d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'%3E%3C/path%3E%3Cpolyline points='16 16 12 12 8 16'%3E%3C/polyline%3E%3C/svg%3E`}
            />
            <h6 className="text-[13px]">Choose a file to upload</h6>
          </div>
        </Button>
      </label>
      {/* Bottom */}
      <div className="flex flex-col pb-6">
        <h6 className="text-[11px] font-normal w-full text-center">
          After upload you can edit your image like
        </h6>
        <h6 className="text-[11px] font-normal w-full text-center">
          Cropping and Rotating.
        </h6>
      </div>
    </div>
  );
};

export default FromComputer;
