import {
  AccountContextProvider,
  AccountSelector
} from "./components/AccountSelector";
import { SelectedAccountsList } from "./components/SelectedAccountsList";
import { Wrapper } from "./components/Wrapper";

import "./styles.css";

export default function App() {
  return (
    <Wrapper title="App">
      <AccountContextProvider>
        <AccountSelector />
        <SelectedAccountsList />
      </AccountContextProvider>
    </Wrapper>
  );
}
