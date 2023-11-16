import React from "react";

type Props = {};

const GamesLayout = ({
  children 
} : { children: React.ReactNode
}) => {
  console.log("game layout")

  return (
    <div>
      <h1>Games Layout</h1>
      {children}
    </div>
  );
};

export default GamesLayout;
