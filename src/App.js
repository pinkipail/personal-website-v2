import React, { Suspense, useState } from 'react';
import { Transition } from 'react-transition-group';
import LoaderPage from './Elements/LoaderPage/LoaderPage';
import './App.css';

const MainPage = React.lazy(() => import('./page/MainPage/MainPage'));
const Cursor = React.lazy(() => import('./Elements/Cursor/Cursor'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  function disablingLoader() {
    setIsLoading(false);
  }

  return (
    <>
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

      <Suspense fallback={null}>
        <Cursor />
      </Suspense>
    </>
  );
}
