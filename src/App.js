import React, { Suspense, useState } from 'react';
import { Transition } from 'react-transition-group';
import Cursor from './Elements/Cursor/Cursor';
import FpsCounter from './Common/FpsCounter/FpsCounter';
import LoaderPage from './Elements/LoaderPage/LoaderPage';
import './App.css';

const MainPage = React.lazy(() => import('./page/MainPage/MainPage'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  function disablingLoader() {
    setIsLoading(false);
  }

  return (
    <>
      <FpsCounter />
      <Cursor />
      <Transition
        in={isLoading}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (<LoaderPage animation={state} />)}
      </Transition>

      <Suspense fallback={null}>
        <MainPage onLoading={disablingLoader} />
      </Suspense>
    </>
  );
}
