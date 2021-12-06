import { useState } from "react";
import { Product, OnChangeArgs, InitialState } from '../interfaces/interfaces';

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialState?: InitialState
}

const useProduct = ( { onChange, product, value = 0, initialState }: UseProductArgs ) => {

  const [counter, setCounter] = useState<number>(initialState?.count || value);

  const reset = () => {
    setCounter(initialState?.count || value)
  }

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(Math.min(newValue, initialState?.maxCount || Infinity));
    onChange && onChange({ product, count: newValue})
  };

  return {
    counter,
    increaseBy,
    isMaxCountReached: !!initialState?.count && initialState.maxCount === counter,
    maxCount: initialState?.maxCount,
    reset
  };
};

export default useProduct;
