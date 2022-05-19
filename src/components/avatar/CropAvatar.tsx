import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { Button, IconButton, Slider } from '@mui/material';
import React, { Fragment, useRef, useState } from 'react';
import {
  CircleStencil,
  CropperRef,
  Cropper,
  isNumber,
  createState,
  CropperProps,
  isEqualStates,
  isInitializedState,
} from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import { useCropAvatarState } from '../../providers/state/CropAvatarState';
import AvatarContainer from '../container/AvatarContainer';
import { SmallIconButtonDark } from '../button/SmallIconButtonDark';
import {
  getAbsoluteZoom,
  getVisibleAreaSize,
} from './cropper/CropperAlgorithms';
import { useSelectAvatarState } from '../../providers/state/SelectAvatarState';

/**
 * @author
 * @function @CropAvatar
 **/

export const CropAvatar = ({ ...props }: CropperProps) => {
  const { CropAvatar, setCropAvatar } = useCropAvatarState();
  const { setSelectAvatar } = useSelectAvatarState();

  const [changed, setChanged] = useState<boolean>(false);
  const [Active, setActive] = useState<boolean>(false);
  const [RotateValue, setRotateValue] = useState<number>(0);
  const [ZoomValue, setZoomValue] = useState<number>(0);

  const closeModal = () => {
    setCropAvatar({ setShow: false });
    setSelectAvatar({ setShow: true });
  };

  const cropperRef = useRef<CropperRef>(null);

  const onChange = (cropper: CropperRef) => {
    const state = cropper.getState();
    setChanged(state ? !isEqualStates(state, getDefaultState(cropper)) : false);
    ChangeZoomValue();
    // console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  /* @ts-ignore: Unreachable code error */
  const defaultSize = ({ imageSize, visibleArea }) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  };

  /* @ts-ignore: Unreachable code error */
  const stencilSize = ({ imageSize }) => {
    return {
      width: imageSize.height,
      height: imageSize.height,
    };
  };

  const getDefaultState = (cropper: CropperRef) => {
    const state = cropper.getState();
    if (state) {
      const image = cropper.getImage();
      const transforms = cropper.getTransforms();

      const k = (transforms.rotate > 0 ? Math.floor : Math.ceil)(
        transforms.rotate / 360
      );

      return (props.createStateAlgorithm || createState)(
        {
          boundary: state.boundary,
          imageSize: state.imageSize,
          priority: props.priority,
          transforms: image
            ? {
                ...image.transforms,
                rotate: k * 360 + image.transforms.rotate,
              }
            : {
                flip: {
                  horizontal: false,
                  vertical: false,
                },
                rotate: k * 360,
              },
        },
        cropper.getSettings()
      );
    } else {
      return null;
    }
  };

  const flip = (horizontal: boolean, vertical: boolean) => {
    const cropper = cropperRef.current;
    if (cropper) {
      if (cropper.getTransforms().rotate % 180 !== 0) {
        cropper.flipImage(!horizontal, !vertical);
      } else {
        cropper.flipImage(horizontal, vertical);
      }
    }
  };

  const rotate = (angle: number) => {
    if (cropperRef.current) {
      cropperRef.current.rotateImage(angle);
    }
  };

  const onZoom = (value: number) => {
    const cropper = cropperRef.current;
    if (cropper) {
      const state = cropper.getState();
      const settings = cropper.getSettings();
      const absoluteZoom = isInitializedState(state)
        ? getAbsoluteZoom(state, cropper.getSettings())
        : 0;
      if (cropper && isInitializedState(state)) {
        cropper.zoomImage(
          getVisibleAreaSize(state, settings, absoluteZoom) /
            getVisibleAreaSize(state, settings, value),
          {
            transitions: !!true,
          }
        );
      }
    }
  };

  const move = (x: number, y: number) => {
    if (cropperRef.current) {
      cropperRef.current.moveImage(x, y); // move x = 50, y = 100
    }
  };

  const onZoomIn = () => {
    if (setZoomValue && isNumber(ZoomValue)) {
      setZoomValue(Math.min(1, ZoomValue + 0.25));
    }
  };

  const onZoomOut = () => {
    if (setZoomValue && isNumber(ZoomValue)) {
      setZoomValue(Math.max(0, ZoomValue - 0.25));
    }
  };

  const reset = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      cropper.setState(getDefaultState(cropper));
      setZoomValue(0);
      setRotateValue(0);
    }
  };

  const RotataionButtonHandle = () => {
    setActive(false);
  };

  const ZoomButtonHandle = () => {
    setActive(true);
  };

  const toFixed = (x: string) => {
    return Number.parseFloat(x).toFixed(0);
  };

  // useEffect(() => {
  //   const cropper = cropperRef.current;
  //   if (cropper) {
  //     const state = cropper.getState();
  //     const absoluteZoom = isInitializedState(state)
  //       ? getAbsoluteZoom(state, cropper.getSettings())
  //       : 0;
  //     // console.log('Zoom value : ' + toFixed(`${absoluteZoom * 100}`));
  //     setZoomValue(absoluteZoom);
  //   }
  // });

  const ChangeZoomValue = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const state = cropper.getState();
      const absoluteZoom = isInitializedState(state)
        ? getAbsoluteZoom(state, cropper.getSettings())
        : 0;
      // console.log('Zoom value : ' + toFixed(`${absoluteZoom * 100}`));
      setZoomValue(absoluteZoom);
    }
  };

  const InActiveClass =
    'transition ease-in rounded-full p-2 px-4 outline-none button-text-lower text-xs font-normal font-sans whitespace-nowrap text-white';

  const ActiveClass =
    'transition ease-in rounded-full p-2 px-4 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.2)] outline-none button-text-lower text-xs font-normal font-sans whitespace-nowrap text-white';

  return (
    <AvatarContainer
      show={CropAvatar.setShow}
      as={Fragment}
      onClose={closeModal}
    >
      <div className="sm:max-w-[850px] sm:max-h-[850px] bg-black relative box-border flex flex-col overflow-none items-center h-full w-full">
        {/* Top */}
        <div className="z-[1] -mb-[160px] xs-435:-mb-[126px] w-full flex flex-col">
          <div className="flex w-full justify-between items-center p-1">
            <IconButton
              onClick={() => {
                closeModal();
              }}
              className="hover:bg-[rgba(255,255,255,0.15)] p-3"
            >
              <ArrowLeftIcon className="h-5 text-white" />
            </IconButton>
            <h6 className="text-white font-normal pt-1">Crop & Rotate</h6>
            <IconButton
              onClick={() => {}}
              className="hover:bg-[rgba(255,255,255,0.15)] p-3"
            >
              <DotsVerticalIcon className="h-5 text-white" />
            </IconButton>
          </div>
          <div className="w-full justify-center p-5 space-x-3">
            <SmallIconButtonDark
              onClick={() => {
                rotate(-90);
              }}
              content="Rotate Left"
              iconURL="/icons/rotate-left.svg"
            />
            <SmallIconButtonDark
              onClick={() => {
                rotate(90);
              }}
              content="Rotate Right"
              iconURL="/icons/rotate-right.svg"
            />
            <SmallIconButtonDark
              onClick={() => {
                flip(true, false);
              }}
              content="Flip X"
              iconURL="/icons/flip-x.svg"
            />
            <SmallIconButtonDark
              onClick={() => {
                flip(false, true);
              }}
              content="Flip Y"
              iconURL="/icons/flip-y.svg"
            />
          </div>
        </div>
        {/* Cropper */}
        <Cropper
          src="/images/avatar/women/women-10.svg"
          /* @ts-ignore: Unreachable code error */
          imageRestriction="stencil"
          onChange={onChange}
          autoZoom={true}
          stencilComponent={CircleStencil}
          defaultSize={defaultSize}
          stencilSize={stencilSize}
          ref={cropperRef}
          moveImage={true}
          backgroundClassName="bg-[#202020]"
          stencilProps={{
            aspectRatio: 1 / 1,
            movable: false,
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
            'cropper circle-stencil flex relative w-full h-full px-7 sm:mx-[65px] pb-[242px] pt-[160px] xs-435:pt-[126px]'
          }
        />
        {/* Bottom */}
        <div className="z-[1] -mt-[242px] flex flex-col w-full">
          {/* Sliders */}
          {Active ? (
            <div className="w-full px-10 mx-auto max-w-[520px]">
              <h6 className="text-white text-xs pb-2 pt-8">
                {toFixed(`${ZoomValue * 100}`)} %
              </h6>
              <div className="flex items-center w-full">
                <h6 className="text-white text-[11px] pr-5 font-light opacity-70">
                  -
                </h6>
                <Slider
                  size="small"
                  track="normal"
                  value={ZoomValue}
                  min={0}
                  step={0.01}
                  max={1}
                  onChange={(_, Value) => {
                    setZoomValue(Value as number);
                    onZoom(Value as number);
                  }}
                  sx={{
                    height: 2,
                    '& .MuiSlider-thumb': {
                      color: 'rgba(255,255,255,1)',
                      width: 8,
                      height: 8,
                      boxShadow: '0px 0px 0px 12px rgb(255 255 255 / 16%)',
                      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                      '&:before': {
                        boxShadow: '0 2px 12px 0 rgba(255,255,255,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible': {
                        borderRadius: '50%',
                        boxShadow: '0px 0px 0px 12px rgb(255 255 255 / 16%)',
                      },
                      '&.Mui-active': {
                        width: 15,
                        height: 15,
                      },
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#ffffff',
                      opacity: 0.5,
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#ffffff',
                      opacity: 0.15,
                    },
                  }}
                />
                <h6 className="text-white text-[11px] pl-5 font-light opacity-70">
                  +
                </h6>
              </div>
            </div>
          ) : (
            <div className="w-full px-10 mx-auto max-w-[520px]">
              <h6 className="text-white text-xs pb-2 pt-8">{RotateValue} °</h6>
              <div className="flex items-center w-full">
                <h6 className="text-white text-[11px] pr-5 font-light opacity-70">
                  -45
                </h6>
                <Slider
                  size="small"
                  track="normal"
                  value={RotateValue}
                  min={-45}
                  step={1}
                  max={45}
                  onChange={(_, Value) => {
                    setRotateValue(Value as number);
                  }}
                  sx={{
                    height: 2,
                    '& .MuiSlider-thumb': {
                      color: 'rgba(255,255,255,1)',
                      width: 8,
                      height: 8,
                      boxShadow: '0px 0px 0px 12px rgb(255 255 255 / 16%)',
                      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                      '&:before': {
                        boxShadow: '0 2px 12px 0 rgba(255,255,255,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible': {
                        borderRadius: '50%',
                        boxShadow: '0px 0px 0px 12px rgb(255 255 255 / 16%)',
                      },
                      '&.Mui-active': {
                        width: 15,
                        height: 15,
                      },
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#ffffff/0%',
                      opacity: 0.1,
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#ffffff',
                      opacity: 0.15,
                    },
                  }}
                />
                <h6 className="text-white text-[11px] pl-5 font-light opacity-70">
                  +45
                </h6>
              </div>
            </div>
          )}
          {/* Toggle Buttons */}
          <div className="flex w-full justify-center space-x-2 p-6">
            <Button
              onClick={RotataionButtonHandle}
              className={Active ? InActiveClass : ActiveClass}
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.1) !important',
                },
              }}
            >
              Rotation
            </Button>
            <Button
              onClick={ZoomButtonHandle}
              className={Active ? ActiveClass : InActiveClass}
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: 'rgba(225, 225, 255, 0.1) !important',
                },
              }}
            >
              Zoom
            </Button>
          </div>
          {/* Submit Button */}
          <div className="flex w-full justify-between space-x-5 px-6 pb-6">
            <Button
              disabled={!changed}
              onClick={() => {
                reset();
              }}
              className="disabled:text-[rgba(255,255,255,0.5)] font-normal max-w-[200px] border border-solid bg-transparent border-[rgba(255,255,255,0.25)] hover:bg-transparent h-[40px] rounded-md button-text-lower text-white text-xs transition-colors w-full"
            >
              Reset to default
            </Button>
            <Button className="max-w-[200px] bg-[#0074E4] hover:bg-[#0074E4] h-[40px] rounded-md button-text-lower text-white text-xs transition-colors w-full">
              Set profile picture
            </Button>
          </div>
        </div>
      </div>
    </AvatarContainer>
  );
};
