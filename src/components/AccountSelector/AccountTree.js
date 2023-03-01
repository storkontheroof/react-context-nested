import { useCallback, useEffect } from "react";
import { Wrapper } from "../Wrapper";
import { useInnerContext } from "./InnerContext";

const accounts = [
  { id: 1, name: "Amazon" },
  { id: 2, name: "Google" },
  { id: 3, name: "Walmart" },
  { id: 4, name: "Shell" },
  { id: 5, name: "Bol" },
  { id: 6, name: "MediaMarkt" },
  { id: 7, name: "Adidas" }
];

const NoAccountsMessage = () => <p>No accounts found</p>;

const AccountList = () => {
  const { state, dispatch } = useInnerContext();

  const onChangeHandler = useCallback(
    (changeEvent) => {
      dispatch({
        type: changeEvent.target.checked ? "ADD" : "REMOVE",
        payload: { id: changeEvent.target.value }
      });
    },
    [dispatch]
  );

  return (
    <>
      {state.filteredAccounts.map((account) => (
        <p key={account.id}>
          <label>
            <input
              type="checkbox"
              onChange={onChangeHandler}
              value={account.id}
            />
            {account.name}
          </label>
        </p>
      ))}
    </>
  );
};

export const AccountTree = () => {
  const { state, dispatch } = useInnerContext();

  useEffect(() => {
    dispatch({
      type: "LOAD",
      payload: { accounts }
    });
  }, [dispatch]);

  return (
    <Wrapper title="Account Tree">
      {state.filteredAccounts.length > 0 ? (
        <AccountList />
      ) : (
        <NoAccountsMessage />
      )}
    </Wrapper>
  );
};
