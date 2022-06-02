import React, { useRef, useState } from 'react';
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
import { CropAvatarBottom } from './CropAvatar/CropAvatarBottom';
import { CropAvatarNavigation } from './CropAvatar/CropAvatarNavigation';
import { CropAvatarSlider } from './CropAvatar/CropAvatarSlider';
import { CropAvatarToggle } from './CropAvatar/CropAvatarToggle';
import { CropAvatarTop } from './CropAvatar/CropAvatarTop';
import {
  getAbsoluteZoom,
  getVisibleAreaSize,
} from './cropper/CropperAlgorithms';

export interface DefaultCropperProps extends CropperProps {
  URL: string;
  getURL: (value: string) => void;
  back: () => void;
  submit: (value: File) => void;
}

/**
 * @author
 * @function @CropAvatar
 **/

export const CropAvatar = ({ URL, back, ...props }: DefaultCropperProps) => {
  const [changed, setChanged] = useState<boolean>(false);
  const [Active, setActive] = useState<boolean>(false);
  const [RotateValue, setRotateValue] = useState<number>(0);
  const [ZoomValue, setZoomValue] = useState<number>(0);

  const cropperRef = useRef<CropperRef>(null);

  const onChange = (cropper: CropperRef) => {
    const state = cropper.getState();
    setChanged(state ? !isEqualStates(state, getDefaultState(cropper)) : false);
    ChangeZoomValue();
    // console.log(cropper.getCoordinates(), cropper.getCanvas());
  };

  const defaultSize = ({ imageSize, visibleArea }: any) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  };

  const stencilSize = ({ imageSize }: any) => {
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
    const cropper = cropperRef.current;
    if (cropper) {
      cropper.rotateImage(RotateValue - angle);
    }
  };

  const rotateButton = (angle: number) => {
    const cropper = cropperRef.current;
    if (cropper) {
      cropper.rotateImage(angle);
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

  const onZoomIn = () => {
    if (setZoomValue && isNumber(ZoomValue)) {
      setZoomValue(Math.min(1, ZoomValue + 0.1));
      onZoom(Math.min(1, ZoomValue + 0.1));
    }
  };

  const onZoomOut = () => {
    if (setZoomValue && isNumber(ZoomValue)) {
      setZoomValue(Math.max(0, ZoomValue - 0.1));
      onZoom(Math.min(1, ZoomValue - 0.1));
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

  const RotataionButtonHandle = () => {
    setActive(false);
  };

  const ZoomButtonHandle = () => {
    setActive(true);
  };

  const RotateLeft = () => {
    rotateButton(90);
  };

  const RotateRight = () => {
    rotateButton(-90);
  };

  const FlipX = () => {
    flip(true, false);
  };

  const FlipY = () => {
    flip(false, true);
  };

  const setZoomValuehandle = (value: number) => {
    setZoomValue(value);
  };

  const setRotateValuehandle = (value: number) => {
    setRotateValue(value);
  };

  const rotatehandle = (value: number) => {
    rotate(value);
  };

  const onZoomhandle = (value: number) => {
    onZoom(value);
  };

  const submit = async () => {
    const cropper = cropperRef.current;
    if (cropper) {
      cropper.getCanvas()?.toBlob((blob: any) => {
        let ImageFile = new File([blob], 'userAvatar.png', {
          type: 'image/png',
        });
        if (ImageFile) {
          props.getURL(`${cropper.getCanvas()?.toDataURL()}`);
          setTimeout(() => {
            props.submit(ImageFile);
          }, 250);
        }
      }, 'image/png');
    }
  };

  return (
    <div className="bg-[#202020] relative box-border flex flex-col overflow-none items-center h-full w-full">
      <div className="z-[1] -mb-[160px] xs-330:-mb-[126px] xs-435:-mb-[126px] w-full flex flex-col">
        <CropAvatarTop back={back} />
        <CropAvatarNavigation
          RotateLeft={RotateLeft}
          RotateRight={RotateRight}
          FlipX={FlipX}
          FlipY={FlipY}
        />
      </div>
      <Cropper
        src={URL}
        /* @ts-ignore: Unreachable code error */
        imageRestriction="stencil"
        onChange={onChange}
        autoZoom={true}
        stencilComponent={CircleStencil}
        defaultSize={defaultSize}
        stencilSize={stencilSize}
        ref={cropperRef}
        moveImage={true}
        scaleImage={true}
        stencilProps={{
          aspectRatio: 1 / 1,
          movable: false,
          // previewClassName: 'CropAvatar-Stencil-preview',
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
          'cropper circle-stencil cursor-grab active:cursor-grabbing CropAvatar-background flex relative w-full h-full px-7 sm:mx-[65px] pb-[242px] pt-[160px] xs-435:pt-[126px]'
        }
      />
      <div className="z-[1] -mt-[242px] flex flex-col w-full">
        <CropAvatarSlider
          Active={Active}
          ZoomValue={ZoomValue}
          setZoomValue={setZoomValuehandle}
          RotateValue={RotateValue}
          setRotateValue={setRotateValuehandle}
          rotate={rotatehandle}
          onZoom={onZoomhandle}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
        <CropAvatarToggle
          Rotataion={RotataionButtonHandle}
          Zoom={ZoomButtonHandle}
          Active={Active}
        />
        <CropAvatarBottom
          changed={changed}
          resetClick={reset}
          submitClick={submit}
        />
      </div>
    </div>
  );
};
