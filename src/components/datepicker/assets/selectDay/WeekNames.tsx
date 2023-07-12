interface IProps {
  value: Array<string>;
}

function WeekNames(props: IProps) {
  return (
    <div className="grid grid-cols-7 relative">
      {props.value.map((value) => (
        <div
          key={value}
          className="m-1 justify-center flex opacity-60 text-white text-[12px]"
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default WeekNames;
