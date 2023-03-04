import { ChevronUpIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';
import React, { Component } from 'react';
import { TooltipDark } from '../../tooltip/TooltipDark';

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
      <div className="absolute top-0 right-0 -mt-6">
        <TooltipDark
          arrow
          placement="top"
          title={<h6 className="font-[400]">Back to Top</h6>}
        >
          <IconButton
            id={ScrollButtonID}
            aria-label="scroll-to-top-button"
            disableFocusRipple
            className="flex group opacity-80 hover:opacity-100 transition-all duration-300 text-white h-[47px] w-[47px] items-center justify-center rounded-lg button-text-lower bg-[#202020] hover:bg-[#202020]"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff50 !important',
              },
            }}
          >
            <ChevronUpIcon className="h-5 w-5 opacity-80 group-hover:opacity-100" />
          </IconButton>
        </TooltipDark>
      </div>
    );
  }
}
