import { Backdrop } from '@mui/material';
import React, { FC } from 'react';
import { useLoaderState } from '../../providers/state/LoadingState';
import style from '../../styles/preloader.module.scss';

interface IProps {}

/**
 * @author
 * @function @Loading
 **/

export const Loading: FC<IProps> = (props) => {
  const { Loader } = useLoaderState();
  const ShowLoader: any = Loader.show;
  return (
    <Backdrop
      className="backdrop-blur-sm transition-all ease-out"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.80)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={ShowLoader}
    >
      <div className={style.content}>
        <div className={style.loading}>
          <p>loading</p>
          <span></span>
        </div>
      </div>
    </Backdrop>
  );
};
