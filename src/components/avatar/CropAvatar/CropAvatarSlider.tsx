import { ZoomOutIcon, ZoomInIcon } from '@heroicons/react/solid';
import { IconButton, Slider } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  Active: boolean;
  ZoomValue: number;
  setZoomValue: (value: number) => void;
  RotateValue: number;
  setRotateValue: (value: number) => void;
  rotate: (value: number) => void;
  onZoom: (value: number) => void;
  onZoomOut: () => void;
  onZoomIn: () => void;
}

/**
 * @author
 * @function @CropAvatarSlider
 **/

export const CropAvatarSlider: FC<IProps> = (props) => {
  const toFixed = (x: string) => {
    return Number.parseFloat(x).toFixed(0);
  };
  return (
    <>
      {props.Active ? (
        <div className="w-full px-10 mx-auto max-w-[520px]">
          <h6 className="text-white text-xs pb-2 pt-8">
            {toFixed(`${props.ZoomValue * 100}`)} %
          </h6>
          <div className="flex items-center w-full">
            <IconButton
              onClick={props.onZoomOut}
              disableTouchRipple
              disableFocusRipple
              disableRipple
              className="text-white h-[28px] w-[28px] mr-5 opacity-50 bg-transparent hover:bg-transparent"
              style={{
                padding: 0,
                borderRadius: 6,
              }}
            >
              <ZoomOutIcon className="h-4" />
            </IconButton>
            <Slider
              size="small"
              track="normal"
              value={props.ZoomValue}
              min={0}
              step={0.01}
              max={1}
              onChange={(_, Value) => {
                props.setZoomValue(Value as number);
                props.onZoom(Value as number);
              }}
              sx={{
                height: 2,
                '& .MuiSlider-thumb': {
                  color: '#ffffff',
                  width: 8,
                  height: 8,
                  boxShadow: '0px 0px 0px 12px rgb(#ffffff / 16%)',
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:before': {
                    boxShadow: '0 2px 12px 0 #ffffff66',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    borderRadius: '50%',
                    boxShadow: '0px 0px 0px 12px rgb(#ffffff / 16%)',
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
            <IconButton
              onClick={props.onZoomIn}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              className="text-white h-[28px] w-[28px] ml-5 opacity-50 bg-transparent hover:bg-transparent"
              style={{
                padding: 0,
                borderRadius: 6,
              }}
            >
              <ZoomInIcon className="h-4" />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="w-full px-10 mx-auto max-w-[520px]">
          <h6 className="text-white text-xs pb-2 pt-8">
            {props.RotateValue} °
          </h6>
          <div className="flex items-center w-full">
            <h6 className="text-white text-[11px] pr-5 font-light opacity-70">
              -45
            </h6>
            <Slider
              size="small"
              track="normal"
              value={props.RotateValue}
              min={-45}
              step={1}
              max={45}
              onChange={(_, Value) => {
                props.setRotateValue(Value as number);
                props.rotate(Value as number);
              }}
              sx={{
                height: 2,
                '& .MuiSlider-thumb': {
                  color: '#ffffff',
                  width: 8,
                  height: 8,
                  boxShadow: '0px 0px 0px 12px rgb(#ffffff / 16%)',
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&:before': {
                    boxShadow: '0 2px 12px 0 #ffffff66',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    borderRadius: '50%',
                    boxShadow: '0px 0px 0px 12px rgb(#ffffff / 16%)',
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
    </>
  );
};
