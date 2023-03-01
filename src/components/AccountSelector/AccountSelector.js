import { InnerContextProvider } from "./InnerContext";
import { AccountTree } from "./AccountTree";
import { Wrapper } from "../Wrapper";
import { AccountFilter } from "./AccountFilter";

export const AccountSelector = () => {
  return (
    <Wrapper title="Account Selector">
      <InnerContextProvider>
        <AccountFilter />
        <AccountTree />
      </InnerContextProvider>
    </Wrapper>
  );
};
