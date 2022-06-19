import { ChevronUpIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';
import React, { Component } from 'react';
import { TooltipDark } from '../../../tooltip/TooltipDark';

interface IProps {}

/**
 * @author
 * @class @ScrollToTopButton
 **/

var ScrollButtonID = 'scroll-to-top-button';

export class ScrollToTopButton extends Component<IProps> {
  state = {};

  componentDidMount() {
    document.getElementById(ScrollButtonID)?.addEventListener('click', () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }, 150);
    });
  }

  render() {
    return (
      <div className="absolute top-0 right-0 p-2.5 sm:px-5 sm:py-5 md-900:py-8">
        <TooltipDark
          arrow
          placement="bottom"
          title={<h6 className="font-[400]">Back to Top</h6>}
        >
          <IconButton
            id={ScrollButtonID}
            disableFocusRipple
            aria-label="scroll-to-top-button"
            className="block opacity-80 header-button-hover transition-all duration-300 button-text-lower h-full p-2 border border-solid border-[rgba(255,255,255,0.23)]"
            sx={{
              borderRadius: '6px !important',
              '.MuiTouchRipple-child': {
                borderRadius: '0 !important',
                backgroundColor: 'rgba(225, 225, 255, 0.5) !important',
              },
            }}
          >
            <ChevronUpIcon className="h-5 w-5 opacity-80 header-icon-hover text-white" />
          </IconButton>
        </TooltipDark>
      </div>
    );
  }
}
