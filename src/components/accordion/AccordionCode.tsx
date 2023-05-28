import React, { FC, useState } from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

interface IProps {}

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
 * @function @AccordionCode
 **/

export const AccordionCode: FC<IProps> = (props) => {
  const [expanded, setExpanded] = useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  // If you are using mapping
  return (
    <Accordion
    // key={idx}
    // expanded={expanded === `Accordion-${idx}`}
    // onChange={handleChange(`Accordion-${idx}`)}
    // className={`${
    //   expanded === `Accordion-${idx}`
    //     ? 'bg-[#ffffff10]'
    //     : 'bg-transparent hover:bg-[#ffffff09]'
    // } text-white items-center justify-center relative rounded-lg`}
    >
      <AccordionSummary
      // aria-controls={`Accordion-${idx}-header-content`}
      // id={`Accordion-${idx}-header`}
      ></AccordionSummary>
      <AccordionDetails
      // aria-controls={`Accordion-${idx}-detail-content`}
      // id={`Accordion-${idx}-content`}
      ></AccordionDetails>
    </Accordion>
  );
};
