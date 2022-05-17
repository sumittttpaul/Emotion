import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { Button, IconButton } from '@mui/material';
import React, { FC, Fragment, useRef } from 'react';
import { CircleStencil, CropperRef, Cropper } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { useCropAvatarState } from '../../providers/state/CropAvatarState';
import AvatarContainer from '../container/AvatarContainer';
import Image from 'next/image';
import { SmallIconButtonDark } from '../button/SmallIconButtonDark';

interface IProps {}

/**
 * @author
 * @function @CropAvatar
 **/

export const CropAvatar: FC<IProps> = (props) => {
  const { CropAvatar, setCropAvatar } = useCropAvatarState();

  const cropperRef = useRef<CropperRef>();

  const onChange = (cropper: CropperRef) => {
    console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  const closeModal = () => {
    setCropAvatar({ setShow: false });
  };

  /* @ts-ignore: Unreachable code error */
  const defaultSize = ({ imageSize, visibleArea }) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  };

  const flip = (horizontal: boolean, vertical: boolean) => {
    if (cropperRef.current) {
      cropperRef.current.flipImage(horizontal, vertical);
    }
  };
  const rotate = (angle: number) => {
    if (cropperRef.current) {
      cropperRef.current.rotateImage(angle);
    }
  };

  const zoom = () => {
    if (cropperRef.current) {
      cropperRef.current.zoomImage(2); // zoom-in 2x
    }
  };
  const move = () => {
    if (cropperRef.current) {
      cropperRef.current.moveImage(50, 100); // move x = 50, y = 100
    }
  };

  return (
    <AvatarContainer
      show={CropAvatar.setShow}
      as={Fragment}
      onClose={closeModal}
    >
      <div className="sm:max-w-[600px] bg-black relative flex flex-col overflow-none items-center h-full w-full">
        {/* Top */}
        <div className="z-[1] -mb-[160px] xs-435:-mb-[126px] w-full flex flex-col">
          <div className="flex w-full justify-between items-center p-1">
            <IconButton
              onClick={() => {}}
              className="hover:bg-[rgba(255,255,255,0.15)] p-3"
            >
              <ArrowLeftIcon className="h-5 text-white" />
            </IconButton>
            <h6 className="text-white font-normal pt-1">Crop & Resize</h6>
            <IconButton
              onClick={() => {}}
              className="hover:bg-[rgba(255,255,255,0.15)] p-3"
            >
              <DotsVerticalIcon className="h-5 text-white" />
            </IconButton>
          </div>
          <div className="w-full justify-center p-5 space-x-3">
            <SmallIconButtonDark onClick={()=>{rotate(-90)}} content='Rotate Left' iconURL='/icons/rotate-left.svg'/>
            <SmallIconButtonDark onClick={()=>{rotate(90)}} content='Rotate Right' iconURL='/icons/rotate-right.svg'/>
            <SmallIconButtonDark onClick={()=>{flip(true,false)}} content='Flip X' iconURL='/icons/flip-x.svg'/>
            <SmallIconButtonDark onClick={()=>{flip(false,true)}} content='Flip Y' iconURL='/icons/flip-y.svg'/>
          </div>
        </div>
        {/* Cropper */}
        <Cropper
          src="/images/avatar/men/men-1.svg"
          onChange={onChange}
          autoZoom={true}
          stencilComponent={CircleStencil}
          defaultSize={defaultSize}
          ref={cropperRef}
          backgroundClassName="bg-[#202020]"
          stencilProps={{
            aspectRatio: 1 / 1,
            previewClassName: 'CropAvatar-Stencil-preview',
            handlerClassNames: {
              default: 'CropAvatar-Stencil-handler',
            },
            lineClassNames: {
              default: 'CropAvatar-Stencil-line',
            },
            handlers: {
              eastNorth: true,
              north: false,
              westNorth: true,
              west: false,
              westSouth: true,
              south: false,
              eastSouth: true,
              east: false,
            },
          }}
          className={
            'cropper circle-stencil w-full h-full sm:max-w-[600px] sm:max-h-[600px] px-5 sm:px-0 sm:mx-[65px] pb-[100px] pt-[160px] xs-435:pt-[126px] m-0'
          }
        />
        {/* Bottom Buttons */}
      </div>
    </AvatarContainer>
  );
};
