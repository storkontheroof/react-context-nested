import React, { useContext, useEffect, useReducer } from "react";
import { Wrapper } from "../Wrapper";
import { useAccountContext } from "./AccountContext";

const initialState = {
  isInitialized: false,
  searchTerm: "",
  accounts: [],
  filteredAccounts: [],
  selectedIds: []
};

const InnerContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        isInitialized: true
      };
    case "LOAD":
      return {
        ...state,
        accounts: action.payload.accounts,
        filteredAccounts: action.payload.accounts
      };

    case "FILTER":
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        filteredAccounts: state.accounts.filter(
          (account) =>
            account.name
              .toLowerCase()
              .indexOf(action.payload.searchTerm.toLowerCase()) > -1
        )
      };

    case "ADD":
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.payload.id]
      };

    case "REMOVE":
      return {
        ...state,
        selectedIds: state.selectedIds.filter((id) => id !== action.payload.id)
      };

    default:
      return state;
  }
};

const InnerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setSelectedAccounts } = useAccountContext();

  /**
   * Update the selectedAccounts in the outer/public context
   */
  useEffect(() => {
    if (state.isInitialized) {
      console.log("--- in useEffect ---");
      setSelectedAccounts(state.selectedIds);
    }

    dispatch({ type: "INIT" });
  }, [state.selectedIds, setSelectedAccounts, state.isInitialized]);

  const store = {
    state,
    dispatch
  };

  return (
    <Wrapper title="InnerContextProvider" color="red">
      <InnerContext.Provider value={store}>{children}</InnerContext.Provider>
    </Wrapper>
  );
};

const useInnerContext = () => {
  const context = useContext(InnerContext);
  if (context === undefined) {
    throw new Error(
      "useInnerContext must be used within a InnerContextProvider"
    );
  }
  return context;
};

export { InnerContextProvider, useInnerContext };
