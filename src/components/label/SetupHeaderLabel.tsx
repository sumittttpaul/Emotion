interface IProps {
  children: React.ReactNode;
  ClassName?: string;
}

function SetupHeaderLabel(props: IProps) {
  return (
    <h5
      className={`${props.ClassName} font-[700] line-clamp-2 text-left w-full text-white text-[25px] md:text-[30px]`}
    >
      {props.children}
    </h5>
  );
}

export default SetupHeaderLabel;
