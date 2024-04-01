import React from 'react';
import { VariableSizeList } from 'react-window';

const rowHeights = new Array(1000)
  .fill(true)
  .map(() => 25 + Math.round(Math.random() * 50));

const getItemSize = index => rowHeights[index]; // 此处采用随机数作为每个列表项的高度
/**
  * 每个列表项的组件
  * @param index：列表项的下标；style：列表项的样式（此参数必须传入列表项的组件中，否则会出现滚动到下方出现空白的情况）
  **/
const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const Example = () => (
  <VariableSizeList
    height={150} // 列表可视区域的高度
    itemCount={1000} // 列表数据长度
    itemSize={getItemSize} // 设置列表项的高度
    layout= "vertical" // （vertical/horizontal） 默认为vertical，此为设置列表的方向
    width={300}
  >
    {Row}
  </VariableSizeList>
);

export default Example;