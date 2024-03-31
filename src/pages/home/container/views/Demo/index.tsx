import React from 'react';
import style from './index.module.css';
import VListOne from '@home/components/VListOne';

interface User {
  name: string,
  age: number
}

const Demo = () => {
  const list: Array<string> = new Array(63).fill('test');

  const user = {
    name: '张三',
    age: 10
  };

  const combine = (user: User) => {
    return user.name+user.age
  }

  return <div className={style.container}>
    <div>{combine(user)}</div>
    <div className={style.list}>
      <VListOne list={list} />
    </div>
    </div>;
};

export default Demo;
