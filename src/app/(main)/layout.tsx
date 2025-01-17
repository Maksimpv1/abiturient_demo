import React from "react";

const MainLoyout = async ({ children }: { children: React.ReactNode }) => {
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000))
  return (
    <div>
        {children}
    </div>
  );
};

export default MainLoyout;
