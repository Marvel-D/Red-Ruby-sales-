import { ReactNode } from "react";

const ContainerW = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  return (
    <div
      className={`h-full w-auto border border-black  p-3 bg-white rounded-md shadow ${style}`}
    >
      {children}
    </div>
  );
};

export { ContainerW };
