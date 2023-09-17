import React from "react";

const Button = ({ onClick, children }) => {
  console.log("button çalıştı");
  return <button onClick={onClick}>{children}</button>;
};

export default React.memo(Button);
