import React, { FC } from 'react';
import Image from 'next/image';
import { Button, styled } from '@mui/material';

interface IProps {
  show: () => void;
  getURL: (value: string) => void;
  backBool: (value: boolean) => void;
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
      props.backBool(true);
    }
  };

  return (
    <div className="text-white box-border scroll-smooth overflow-auto p-6 space-y-4 h-full w-full items-center justify-center flex flex-col">
      {/* Heading */}
      <div className="space-y-1">
        <h6 className="text-md tracking-wide font-[600] w-full text-center">
          Upload your Image
        </h6>
        <h6 className="text-sm text-white/75 font-normal w-full text-center">
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
          aria-label="from-computer-button"
          disableRipple
          disableFocusRipple
          disableTouchRipple
          sx={{ border: '2px dashed #FFFFFF60' }}
          component="span"
          className="button-text-lower cursor-default p-6 bg-transparent text-[#ffffff80] w-full max-w-[350px] rounded-md hover:bg-primary-theme/30 active:outline-none focus:outline-none transition-colors"
        >
          <div className="flex flex-col space-y-2 items-center justify-center">
            <Image
              height={75}
              width={75}
              src="/vectors/image-pickup.svg"
              alt=""
            />
            <h6 className="text-sm text-sky-400 tracking-wide">
              Choose a file to upload
            </h6>
          </div>
        </Button>
      </label>
      {/* Bottom */}
      <div className="flex flex-col pb-6">
        <h6 className="text-[13px] text-white/75 font-normal w-full text-center">
          After upload you can edit your image like
        </h6>
        <h6 className="text-[13px] text-white/75 font-normal w-full text-center">
          Cropping, Rotating, etc.
        </h6>
      </div>
    </div>
  );
};

export default FromComputer;
