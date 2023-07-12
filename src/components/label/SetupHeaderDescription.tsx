interface IProps {
  children: React.ReactNode;
  ClassName?: string;
}

function SetupHeaderDescription(props: IProps) {
  return (
    <h6
      className={`${props.ClassName} font-normal line-clamp-2 text-left w-full text-white/75 text-[15px]`}
    >
      {props.children}
    </h6>
  );
}

export default SetupHeaderDescription;
