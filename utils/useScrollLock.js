import { useEffect } from 'react';
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const useScrollLock = element => {
  disableBodyScroll(element);
};

export default useScrollLock;
