import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// const Dialog = React.lazy(() => import('component_app/Dialog'))

const Index = () => {
  console.log('home');

  return (
    <>
      <Link to="/home">home</Link>
      {/* <Suspense fallback={<p>loading</p>}>
        <Dialog />
      </Suspense> */}
    </>
  );
};

export default observer(Index);
