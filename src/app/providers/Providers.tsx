import React from "react";
import StoreProvider from "./StoreProvider";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
