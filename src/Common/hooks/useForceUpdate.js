import { useState } from 'react';

function useForceUpdate() {
  const [, setState] = useState();
  return setState;
}

export default useForceUpdate;
