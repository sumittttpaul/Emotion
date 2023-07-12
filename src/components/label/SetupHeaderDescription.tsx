interface IProps {
  children: React.ReactNode;
  ClassName?: string;
}

function SetupHeaderDescription(props: IProps) {
  return (
    <p
      className={`${props.ClassName} font-normal line-clamp-2 text-left w-full text-white/75 text-[15px]`}
    >
      {props.children}
    </p>
  );
}

export default SetupHeaderDescription;
