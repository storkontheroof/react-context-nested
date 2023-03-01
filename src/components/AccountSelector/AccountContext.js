import React, { useCallback, useContext, useMemo, useState } from "react";
import { Wrapper } from "../Wrapper";

const initialState = {
  selectedAccounts: [],
};

const AccountContext = React.createContext();

const AccountContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const clearSelectedAccounts = useMemo(() => {
    setState(initialState);
  }, []);

  const setSelectedAccounts = useCallback((selectedAccounts) => {
    console.log(">>> setting selected accounts", { selectedAccounts });
    setState({ ...state, selectedAccounts });
  }, []);

  const value = {
    state,
    setSelectedAccounts,
    clearSelectedAccounts,
  };

  return (
    <Wrapper title="AccountContextProvider" color="red">
      <AccountContext.Provider value={value}>
        {children}
      </AccountContext.Provider>
    </Wrapper>
  );
};

const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error(
      "useAccountContext must be used within a AccountContextProvider"
    );
  }
  return context;
};

export { AccountContextProvider, useAccountContext };
