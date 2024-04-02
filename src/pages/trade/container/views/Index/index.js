import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '@trade/store/reducer/counter'
import style from './index.module.css';
import Loading from '@trade/components/Loading/index.jsx';
import { Link } from 'react-router-dom';

const Index = () => {
  const inputEle = useRef(null);

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Link to="/trade/vlist">Vlist</Link> <br />
      <Link to="/trade/intro">intro</Link> <br />
      <Link to="/trade/mock">mock</Link> <br />
      <Link to="/trade/lottie">lottie</Link> <br />
      <div className={style.body}>
        组件样式
      </div>
      <Loading />
      {count}
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        加一
      </button>
      <button onClick={() => dispatch(decrement())}>减一</button>
      <br />
      <input type='number' ref={inputEle} />
      <button
        onClick={() => {
          const num = Number(inputEle.current.value)
          num && dispatch(incrementByAmount(num))
        }}
      >
        加
      </button>
    </>
  );
};

export default Index;
