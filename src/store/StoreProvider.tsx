import { Dispatch, ReactNode, createContext, useReducer } from "react";
import storeReducer, {
  StateProps,
  actionProps,
  intialState,
} from "./StoreReducer";

interface ContextProviderProps {
  children: ReactNode;
}

const StoreContext = createContext<
  (Dispatch<actionProps> | StateProps)[] | null
>(null);

const StoreProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(storeReducer, intialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
export { StoreContext };
export default StoreProvider;
