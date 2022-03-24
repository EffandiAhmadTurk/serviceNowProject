import { createContext, useReducer } from 'react';
import isEligibleForPopup from 'utils/isEligibleForPopup';

export const ModalContext = createContext();

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_LETS_CHAT_MODAL_OPEN':
      return {
        ...state,
        isLetsChatModalOpen: action.payload,
      };
    case 'SET_SCHEDULE_TOUR_MODAL':
      return {
        ...state,
        scheduleTourModal: action.payload,
      };
    case 'SET_IS_LOGIN_MODAL_OPEN':
      return {
        ...state,
        isLoginModalOpen: action.payload,
      };
    case 'SET_IS_SIGNUP_MODAL_OPEN':
      return {
        ...state,
        isSignupModalOpen: action.payload,
      };
    case 'SET_IS_RESET_PASSWORD_MODAL_OPEN':
      return {
        ...state,
        isResetPasswordModalOpen: action.payload,
      };
    case 'SET_IS_CLOSABLE':
      return {
        ...state,
        isModalClosable: action.payload,
      };
    case 'SET_AUTH_MODALS_CLOSED':
      return {
        ...state,
        isLoginModalOpen: false,
        isResetPasswordModalOpen: false,
        isSignupModalOpen: false,
      };
    case 'SET_FILTER_MODAL_STATE':
      return {
        ...state,
        filterModalState: action.payload,
      };
    case 'SET_IS_LOCATION_REVIEW_MODAL_OPEN':
      return {
        ...state,
        locationReviewModalInfo: action.payload,
      };
    case 'SET_IS_AD_POPUP_STATE':
      return {
        ...state,
        adPopupState: action.payload,
      };
    case 'SET_IS_LIST_MY_HOME_MODAL_OPEN':
      return {
        ...state,
        isListMyHomeModalOpen: action.payload,
      };
    case 'SET_IS_REVIEW_MODAL_STATE':
      return {
        ...state,
        reviewModalState: action.payload,
      };
    default:
      return state;
  }
};

const ModalContextProvider = props => {
  const initialState = {
    isLetsChatModalOpen: false,
    scheduleTourModal: {
      isOpen: false,
      listing: null,
      address: '',
      addressLink: '',
    },
    isLoginModalOpen: false,
    isSignupModalOpen: false,
    isResetPasswordModalOpen: false,
    isModalClosable: true,
    locationReviewModalInfo: {
      isOpen: false,
      locationName: null,
      locationSlug: null,
    },
    filterModalState: {
      isOpen: false,
      isCloseHidden: false,
    },
    adPopupState: {
      isOpen: false,
      audience: null,
    },
    isListMyHomeModalOpen: false,
    reviewModalState: { isOpen: false, review: null },
  };

  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  const setIsLetsChatModalOpen = isOpen => {
    dispatch({ type: 'SET_IS_LETS_CHAT_MODAL_OPEN', payload: isOpen });
  };
  const setIsLoginModalOpen = isOpen => {
    dispatch({ type: 'SET_IS_LOGIN_MODAL_OPEN', payload: isOpen });
  };
  const setIsSignupModalOpen = isOpen => {
    dispatch({ type: 'SET_IS_SIGNUP_MODAL_OPEN', payload: isOpen });
  };
  const setIsResetPasswordModalOpen = isOpen => {
    dispatch({ type: 'SET_IS_RESET_PASSWORD_MODAL_OPEN', payload: isOpen });
  };
  const setIsModalClosable = isClosable => {
    dispatch({ type: 'SET_IS_CLOSABLE', payload: isClosable });
  };
  const setAuthModalsClosed = () => {
    dispatch({ type: 'SET_AUTH_MODALS_CLOSED' });
  };
  const setScheduleTourModal = scheduleTour => {
    dispatch({ type: 'SET_SCHEDULE_TOUR_MODAL', payload: scheduleTour });
  };
  const setFilterModalState = newFilterModalState => {
    dispatch({
      type: 'SET_FILTER_MODAL_STATE',
      payload: { ...modalState.filterModalState, ...newFilterModalState },
    });
  };
  const setLocationReviewModalInfo = isOpen => {
    dispatch({ type: 'SET_IS_LOCATION_REVIEW_MODAL_OPEN', payload: isOpen });
  };

  const setIsListMyHomeModalOpen = isOpen => {
    dispatch({ type: 'SET_IS_LIST_MY_HOME_MODAL_OPEN', payload: isOpen });
  };

  const setReviewModalState = state => {
    dispatch({ type: 'SET_IS_REVIEW_MODAL_STATE', payload: state });
  };

  const setAdPopupState = newState => {
    // Manage ad pop up
    const { audience } = newState;
    if (isEligibleForPopup(audience)) {
      dispatch({
        type: 'SET_IS_AD_POPUP_STATE',
        payload: { ...modalState.adPopupState, ...newState },
      });
    }
  };

  const value = {
    ...modalState,
    setIsLetsChatModalOpen,
    setScheduleTourModal,
    setIsLoginModalOpen,
    setIsSignupModalOpen,
    setIsResetPasswordModalOpen,
    setIsModalClosable,
    setAuthModalsClosed,
    setScheduleTourModal,
    setLocationReviewModalInfo,
    setFilterModalState,
    setAdPopupState,
    setIsListMyHomeModalOpen,
    setReviewModalState,
  };

  return (
    <ModalContext.Provider value={value}>
      {props.children}
    </ModalContext.Provider>
  );
};

const ModalContextConsumer = ModalContext.Consumer;

export { ModalContextProvider, ModalContextConsumer };
