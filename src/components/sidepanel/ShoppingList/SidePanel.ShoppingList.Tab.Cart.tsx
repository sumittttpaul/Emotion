import { Button } from '@mui/material';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { StoreCartContentProps } from '../../../contents/store/Store.ShoppingList';

export interface SidePanelShoppingListTabCartProps {
  ContentArray: StoreCartContentProps[];
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {},
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  paddingLeft: 10,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

/**
 * @author
 * @function @SidePanelShoppingListTabCart
 **/

export const SidePanelShoppingListTabCart: FC<
  SidePanelShoppingListTabCartProps
> = (props) => {
  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="pb-3 px-1 w-full h-full flex flex-col relative">
      <div className="w-full flex flex-col space-y-3">
        <div className="flex w-full h-full px-3">
          <p className="flex items-start text-[14px] font-[400] tracking-wide">
            Total :&nbsp;
          </p>
          <p className="text-[18px] font-[500] block tracking-wide">₹2079.00</p>
        </div>
        <Button
          className="w-full rounded-md bg-[#ffffff10] hover:bg-[#ffffff20] text-white font-normal text-[13px] button-text-lower"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff40 !important',
            },
          }}
        >
          Checkout
        </Button>
      </div>
      <div className="flex flex-col w-full pt-3 pb-[60px]">
        {props.ContentArray.map((value, idx) => (
          <Accordion
            key={idx}
            expanded={expanded === `SidePanel-Accordion-${idx}`}
            onChange={handleChange(`SidePanel-Accordion-${idx}`)}
            className={`${
              expanded === `SidePanel-Accordion-${idx}`
                ? 'bg-[#ffffff10]'
                : 'bg-transparent hover:bg-[#ffffff09]'
            } text-white items-center justify-center relative rounded-lg`}
          >
            <AccordionSummary
              aria-controls={`SidePanel-Accordion-${idx}-header-content`}
              id={`SidePanel-Accordion-${idx}-header`}
            >
              <div className="flex w-full items-center justify-center">
                <Image
                  height={50}
                  width={50}
                  style={{
                    height: 50,
                    width: 50,
                    minHeight: 50,
                    minWidth: 50,
                    maxHeight: 50,
                    maxWidth: 50,
                    borderRadius: 6,
                  }}
                  src={value.Image}
                  alt=""
                />
                <div className="pl-3 w-full h-full space-y-auto items-center overflow-hidden">
                  <div className="w-full text-left truncate text-[14px] font-[500]">
                    {value.Heading}
                  </div>
                  <div className="flex w-full justify-start space-x-2">
                    <div className="text-[13px] opacity-75 truncate">
                      {value.Category}
                    </div>
                    <div className="text-[13px] opacity-75">•</div>
                    <div className="text-[13px] opacity-75">{value.Price}</div>
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails
              aria-controls={`SidePanel-Accordion-${idx}-detail-content`}
              id={`SidePanel-Accordion-${idx}-content`}
              className="p-0 m-0 w-full"
            >
              <div className="p-2 space-y-2">
                <div className="flex space-x-2">
                  <CustomButtons Label="Remove" onClick={() => {}} />
                  <CustomButtons Label="View Details" onClick={() => {}} />
                </div>
                <CustomButtons Label="Move to Wishlist" onClick={() => {}} />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

interface CustomButtonsProps {
  Label: string;
  onClick: () => void;
}

const CustomButtons = ({ Label, onClick }: CustomButtonsProps) => {
  return (
    <Button
      onClick={onClick}
      className="w-full py-1 text-white text-[12px] font-[300] button-text-lower bg-[#ffffff10] hover:bg-[#ffffff20]"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff40 !important',
        },
      }}
    >
      {Label}
    </Button>
  );
};
