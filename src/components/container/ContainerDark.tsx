function ContainerDark({ children }: ChildrenType) {
  return (
    <div className="p-0 m-0 flex flex-grow relative w-full h-full bg-[#0f0f0f]">
      {children}
    </div>
  );
}

export default ContainerDark;
