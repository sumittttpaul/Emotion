import React, { FC, Fragment, MouseEvent, useState } from 'react';
import { IAvatarIconReducerState } from '../../redux/reducers/AvatarReducer';
import AvatarContainerDialog from '../dialog/AvatarContainerDialog';
import ShowAvatar from './assets/ShowAvatar';
import SelectAvatar from './assets/SelectAvatar';
import CollectionForAvatar from './assets/CollectionForAvatar';
import CropAvatar from './assets/CropAvatar';
import { MoreInfoDialog } from './assets/MoreInfoDialog';

export interface AvatarButtonDialogProps {
  AvatarDialog: boolean;
  setAvatarDialog: () => void;
  AvatarContainer: string;
  AvatarScreen1: boolean;
  AvatarScreen2: boolean;
  MoveToSelectAvatar: () => void;
  AvatarURL: string;
  RemoveClick: () => void;
  ChangeDisabled: boolean;
  RemoveDisabled: boolean;
  UploadLoadingScreen: boolean;
  UploadProgress: string;
  BackToShowAvatar: () => void;
  MoveToCropAvatar: () => void;
  GetImageURL: (value: string) => void;
  CollectionBackBool: (value: boolean) => void;
  CollectionReducerName: (value: string) => void;
  CollectionHeading: (value: string) => void;
  CollectionShowHeading: string;
  CollectionShow: () => void;
  BackToSelectAvatar: () => void;
  CollectionReducer: IAvatarIconReducerState[];
  BackToAvatarCollection: () => void;
  ImageURLToCrop: string;
  GetCropImageURL: (value: string) => void;
  AvatarSubmit: (value: File) => void;
}

const MoreInfoContent = [
  { label: 'Help', icon: '/icons/help-circle.svg', onClick: () => {} },
  { label: 'Feedback', icon: '/icons/feedback-message.svg', onClick: () => {} },
];

/**
 * @author
 * @function @AvatarButtonDialog
 **/

export const AvatarButtonDialog: FC<AvatarButtonDialogProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const MoreInfoOpen = Boolean(anchorEl);

  const MoreInfoClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const MoreInfoClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <AvatarContainerDialog
        close={props.setAvatarDialog}
        show={props.AvatarDialog}
        className={props.AvatarContainer}
      >
        {props.AvatarScreen1 ? (
          props.AvatarScreen2 ? (
            <CropAvatar
              moreInfo={MoreInfoClick}
              back={props.BackToAvatarCollection}
              submit={props.AvatarSubmit}
              URL={props.ImageURLToCrop}
              getURL={props.GetCropImageURL}
            />
          ) : (
            <SelectAvatar
              moreInfo={MoreInfoClick}
              backward={props.BackToShowAvatar}
              forward={props.MoveToCropAvatar}
              getURL={props.GetImageURL}
              backBool={props.CollectionBackBool}
              ShowCollection={props.CollectionShow}
              CollectionHeading={props.CollectionHeading}
              AvatarName={props.CollectionReducerName}
            />
          )
        ) : props.AvatarScreen2 ? (
          <CollectionForAvatar
            moreInfo={MoreInfoClick}
            heading={props.CollectionShowHeading}
            backward={props.BackToSelectAvatar}
            forward={props.MoveToCropAvatar}
            getURL={props.GetImageURL}
            AvatarReducer={props.CollectionReducer}
          />
        ) : (
          <ShowAvatar
            moreInfo={MoreInfoClick}
            URL={props.AvatarURL}
            remove={props.RemoveClick}
            changedisabled={props.ChangeDisabled}
            removedisabled={props.RemoveDisabled}
            backward={props.setAvatarDialog}
            forward={props.MoveToSelectAvatar}
            ShowProgress={props.UploadLoadingScreen}
            Progress={props.UploadProgress}
          />
        )}
      </AvatarContainerDialog>
      <MoreInfoDialog
        anchorEl={anchorEl}
        open={MoreInfoOpen}
        handleClose={MoreInfoClose}
        MenuContent={MoreInfoContent}
      />
    </Fragment>
  );
};
