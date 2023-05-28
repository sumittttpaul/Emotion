import Image from 'next/image';
import React, { FC, useState } from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { StoreWishlistContentProps } from '../../../contents/store/Store.ShoppingList';
import dynamic from 'next/dynamic';
import { SidePanelShoppingListTabDetailButtonsProps } from './SidePanel.ShoppingList.Tab.DetailButtons';

interface IProps {
  ContentArray: StoreWishlistContentProps[];
}

const SidePanelShoppingListTabDetailButtons =
  dynamic<SidePanelShoppingListTabDetailButtonsProps>(() =>
    import('./SidePanel.ShoppingList.Tab.DetailButtons').then(
      (x) => x.SidePanelShoppingListTabDetailButtons
    )
  );

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
 * @function @SidePanelShoppingListTabWishlist
 **/

export const SidePanelShoppingListTabWishlist: FC<IProps> = (props) => {
  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="pb-3 px-1 w-full h-full flex flex-col relative">
      {props.ContentArray.length ? (
        <div className="flex flex-col w-full pb-[60px]">
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
                      <div className="text-[13px] opacity-75">
                        {value.Price}
                      </div>
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
                    <SidePanelShoppingListTabDetailButtons
                      Label="Remove"
                      onClick={() => {}}
                    />
                    <SidePanelShoppingListTabDetailButtons
                      Label="View Details"
                      onClick={() => {}}
                    />
                  </div>
                  <SidePanelShoppingListTabDetailButtons
                    Label="Add to Cart"
                    onClick={() => {}}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-5 pt-[150px] h-full w-full items-center justify-center opacity-50">
          <Image
            height={100}
            width={100}
            src="/vectors/empty-wishlist-vector-white.svg"
            alt=""
          />
          <p className='text-[12px] font-[400] tracking-wide truncate'>You haven't saved anything yet</p>
        </div>
      )}
    </div>
  );
};
