import { useEffect, useRef } from 'react';

export const useEffectAfterMount = (callback, deps) => {
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
      return callback();
    }
    componentJustMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
