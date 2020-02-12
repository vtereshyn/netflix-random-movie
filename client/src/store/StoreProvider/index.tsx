import React, {
  createContext,
  useReducer,
  ReactNode,
  FunctionComponent,
  Dispatch
} from 'react';
import { reducer } from '../actions';
import { StoreType } from '../../types';

interface Context {
  state: StoreType;
  dispatch?: Dispatch<any>;
}

const INITIAL_STATE = {
  state: {
    movie: null
  }
};

const Store = createContext<Context>(INITIAL_STATE);

interface Props {
  children: ReactNode;
}

const StoreProvider: FunctionComponent<Props> = ({ children }) => {
  // TODO: get rid of 'never'
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE as never);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { Store, StoreProvider };
