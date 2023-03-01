import { useAccountContext } from "./AccountSelector";
import { Wrapper } from "./Wrapper";

export const SelectedAccountsList = () => {
  const {
    state: { selectedAccounts },
    clearSelectedAccounts
  } = useAccountContext();

  return (
    <Wrapper title="Selected Accounts">
      {selectedAccounts && (
        <div>
          <ul>
            {selectedAccounts.map((account) => {
              return <li>{account}</li>;
            })}
          </ul>

          <button onClick={() => clearSelectedAccounts}>
            Clear selected accounts
          </button>
        </div>
      )}
    </Wrapper>
  );
};
