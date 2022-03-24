import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ModalContext } from '../../contexts/ModalContext';

const withLogin = Page => props => {
  const { isAuthenticated } = useContext(AuthContext);
  const { setFilterModalState } = useContext(ModalContext);

  const setterRef = useRef(null);

  const openFilterModal = () => {
    setterRef.current = setTimeout(() => {
      setFilterModalState({
        isOpen: true,
        isCloseHidden: true,
      });
    }, 5000);
  };

  useEffect(() => {
    (async () => {
      if (!isAuthenticated) {
        openFilterModal();
      } else {
        clearTimeout(setterRef.current);
      }
    })();
  }, [isAuthenticated]);

  return <Page {...props} />;
};

export default withLogin;
