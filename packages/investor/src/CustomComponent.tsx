import React from "react";
import { CustomComponentWithProps } from "./CustomComponentWithProps";
export const CustomComponent: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <div>My TS Component</div>
      <CustomComponentWithProps name={"Nikolai"} />
    </div>
  );
};
