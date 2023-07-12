interface IProps {
  setHeaderDates: string;
}

function DatePickerDialogHeader(props: IProps) {
  return (
    <div className="text-white text-lg bg-[#151515] w-full relative block  whitespace-nowrap text-left">
      <h6 className="text-[11px] opacity-50 py-1 px-3 ">
        Choose your Date of Birth
      </h6>
      <h6 className="px-7 pb-4 text-2xl font-semibold">
        {props.setHeaderDates}
      </h6>
    </div>
  );
}

export default DatePickerDialogHeader;
