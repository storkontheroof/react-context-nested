import { useCallback, useEffect } from "react";
import { Wrapper } from "../Wrapper";
import { useInnerContext } from "./InnerContext";

export const AccountFilter = () => {
  const { state, dispatch } = useInnerContext();

  const onChangeHandler = useCallback(
    (changeEvent) => {
      dispatch({
        type: "FILTER",
        payload: { searchTerm: changeEvent.target.value }
      });
    },
    [dispatch]
  );

  return (
    <Wrapper title="Account Filter">
      <div>
        <input
          type="text"
          onChange={onChangeHandler}
          value={state.searchTerm}
        />
      </div>
    </Wrapper>
  );
};
