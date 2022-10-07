import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log('From demo output');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
