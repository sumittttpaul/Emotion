function BorderContainerDark({ children }: ChildrenType) {
  return (
    <div className="border-color-dark border border-solid hover:border bg-transparent w-full p-3 rounded-md flex items-center justify-center">
      {children}
    </div>
  );
}

export default BorderContainerDark;
