interface IProps {
  children: React.ReactNode;
  ClassName?: string;
}

function SetupHeaderLabel(props: IProps) {
  return (
    <h1
      className={`${props.ClassName} font-[700] line-clamp-2 text-left w-full text-white text-[25px] md:text-[30px]`}
    >
      {props.children}
    </h1>
  );
}

export default SetupHeaderLabel;
