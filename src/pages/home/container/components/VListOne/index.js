import React, { useMemo, memo, useState, useRef, useEffect, useDeferredValue } from "react";

/**
 * 虚拟滚动，整个列表高度固定，item高度固定
 * 监听滚动事件，只在视口内展示元素
 * 原来没考虑使用useDeferredValue，但是在测试时发现，scrollTop等于0时startIndex起始位置始终定位不到0
 */
const VListOne = ({list = [], containerHeight = 600, itemHeight = 50}) => {

  // 视口看到下标
  const [startIndex, setStartIndex] = useState(0);

  const containerRef = useRef(null);

  const [scrollTop, setScrollTop] = useState(0);

  const deferredQuery = useDeferredValue(scrollTop, { timeoutMs: 200 });

  // container样式
  const containerStyle = useMemo(() => {
    return {
      height: `${containerHeight}px`,
      width: '200px',
      overflowY: 'auto',
      overflowX: 'hidden',
    }
  }, [containerHeight])

  // wraper样式
  const wraperStyle = useMemo(() => {
    return {
      height: `${list.length * itemHeight}px`,
      position: 'relative'
    }
  }, [list, itemHeight])

  // 视口显示列表的结束索引
  const endIndex = useMemo(() => {
    // 视口可以看到的条数
    const limit = Math.ceil(containerHeight / itemHeight) + 1;
    return Math.min(startIndex + limit, list.length);
  }, [startIndex, containerHeight, itemHeight]);

  const handleScroll = () => {
    setScrollTop(containerRef.current.scrollTop)
  };

  useEffect(() => {
    containerRef.current.addEventListener('scroll', handleScroll)
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    let currentIndex = Math.floor(deferredQuery / itemHeight);
    if (currentIndex !== startIndex) {
      setStartIndex(currentIndex);
    }
  }, [deferredQuery])

  return (
    <div style={containerStyle}  ref={containerRef}>
      <div style={wraperStyle}>
        {list.slice(startIndex, endIndex).map((item, index) => {
          return <Itembox
            key={index + startIndex}
            index={index + startIndex}
            height={itemHeight}
            data={`${item}${index + startIndex}`}
          />
        })}
      </div>
    </div>
  );
};

const Itembox = ({index, height, data}) => {
  const computedStyle = useMemo(() => {
    return {
      position: 'absolute',
      top: `${index * height}px`,
      left: 0,
      right: 0,
      userSelect: 'none'
    }
  }, [index, height])
  return <div style={computedStyle}>{data}</div>
}

export default memo(VListOne);
