import React from "react";
import ListOne from './ListOne';
import ListTwo from './ListTwo';
import ListThree from './ListThree';

const Example = () => {
  return (
    <>
      固定尺寸的列表<br />
      <ListOne />
      可变尺寸列表<br />
      <ListTwo />
      列表自适应当前页面的宽高<br />
      <ListThree />
    </>
  );
};

export default Example;
