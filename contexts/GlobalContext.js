import { createContext, useReducer } from 'react';

const GlobalContext = createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEARBY_LOCATIONS':
      return {
        ...state,
        nearbyLocations: action.payload,
      };
    case 'SET_AGENT_LOCATIONS':
      return {
        ...state,
        agentLocations: action.payload,
      };
    default:
      return state;
  }
};

const GlobalContextProvider = props => {
  const initialState = {
    nearbyLocations: null,
    agentLocations: null,
  };
  const [globalState, dispatch] = useReducer(globalReducer, initialState);

  const setNearbyLocations = nearByLocations => {
    dispatch({ type: 'SET_NEARBY_LOCATIONS', payload: nearByLocations });
  };

  const setAgentLocations = agentLocations => {
    dispatch({ type: 'SET_AGENT_LOCATIONS', payload: agentLocations });
  };

  const value = {
    globalState,
    setNearbyLocations,
    setAgentLocations,
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const GlobalContextConsumer = GlobalContext.Consumer;

export { GlobalContext, GlobalContextProvider, GlobalContextConsumer };
