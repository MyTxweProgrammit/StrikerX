import { useEffect } from 'react';

export const usePopCash = (isActive) => {
  useEffect(() => {
    if (!isActive) return;

    window.uid = '501369';
    window.wid = '753620';
    window.pop_fback = 'up';

    const script = document.createElement('script');
    script.src = '//cdn.popcash.net/show.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [isActive]);
};