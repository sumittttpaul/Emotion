import React, { useRef, useState, MouseEvent } from 'react';
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
import { CropAvatarZoom } from './CropAvatar/CropAvatarZoom';
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
  moreInfo: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * @author
 * @function @CropAvatar
 **/

const CropAvatar = ({ URL, back, ...props }: DefaultCropperProps) => {
  const [changed, setChanged] = useState(false);
  const [RotateValue, setRotateValue] = useState(0);
  const [ZoomValue, setZoomValue] = useState(0);
  const [Loading, setLaoding] = useState(false);

  const cropperRef = useRef<CropperRef>(null);
  const sliderRef = useRef<HTMLElement>(null);

  const onChange = (cropper: CropperRef) => {
    const state = cropper.getState();
    setChanged(state ? !isEqualStates(state, getDefaultState(cropper)) : false);
    ChangeZoomValue();
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
    } else return null;
  };

  const flip = (horizontal: boolean, vertical: boolean) => {
    const cropper = cropperRef.current;
    if (cropper) {
      if (cropper.getTransforms().rotate % 180 !== 0)
        cropper.flipImage(!horizontal, !vertical);
      else cropper.flipImage(horizontal, vertical);
    }
  };

  const rotate = (angle: number) => {
    const cropper = cropperRef.current;
    if (cropper) cropper.rotateImage(RotateValue - angle);
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
    if (isNumber(ZoomValue)) {
      setZoomValue(Math.min(1, ZoomValue + 0.1));
      onZoom(Math.min(1, ZoomValue + 0.1));
    }
  };

  const onZoomOut = () => {
    if (isNumber(ZoomValue)) {
      setZoomValue(Math.min(1, ZoomValue - 0.1));
      onZoom(Math.min(1, ZoomValue - 0.1));
    }
  };

  const reset = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      cropper.setState(getDefaultState(cropper));
      setZoomValue(0);
      setRotateValue(0);
      const slider = sliderRef.current;
      if (slider) {
        slider.scrollTo({ left: 544, top: 0, behavior: 'smooth' });
      }
    }
  };

  const ChangeZoomValue = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const state = cropper.getState();
      const absoluteZoom = isInitializedState(state)
        ? getAbsoluteZoom(state, cropper.getSettings())
        : 0;
      setZoomValue(absoluteZoom);
    }
  };

  const RotateLeft = () => rotate(90);

  const RotateRight = () => rotate(-90);

  const FlipX = () => flip(true, false);

  const FlipY = () => flip(false, true);

  const submit = () => {
    setLaoding(true);
    const cropper = cropperRef.current;
    if (cropper) {
      cropper.getCanvas()?.toBlob((blob: any) => {
        let ImageFile = new File([blob], 'userAvatar.png', {
          type: 'image/png',
        });
        if (ImageFile) {
          props.getURL(`${cropper.getCanvas()?.toDataURL()}`);
          props.submit(ImageFile);
        }
      }, 'image/png');
    }
  };

  return (
    <div className="bg-secondary-theme CropAvatar-container relative box-border flex flex-col overflow-hidden overscroll-none items-center h-full w-full">
      <div className="z-[1] w-full h-[150px] flex flex-col">
        <CropAvatarTop
          heading="Edit profile picture"
          back={back}
          moreInfo={props.moreInfo}
        />
        <CropAvatarNavigation
          ResetClick={reset}
          Changed={changed}
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
          overlayClassName: 'CropAvatar-stencil-overlay',
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
          'cropper circle-stencil px-5 -mt-[150px] -mb-[228px] pt-[156px] pb-[234px] cursor-default active:cursor-grab CropAvatar-background flex relative w-full h-full'
        }
      />
      <div className="z-[1] flex flex-col h-[228px] w-full relative">
        <CropAvatarSlider
          SliderRef={sliderRef}
          setRotateValue={setRotateValue}
          rotate={rotate}
        />
        <CropAvatarZoom
          ZoomValue={ZoomValue}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
        <CropAvatarBottom
          back={back}
          submitClick={submit}
          submitLoading={Loading}
        />
      </div>
    </div>
  );
};

export default CropAvatar;
