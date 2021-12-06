import React from "react";
import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext } from "react";
import { OnChangeArgs, Product, ProductContextProps, InitialState, ProductCardHandlers } from '../interfaces/interfaces';
import {ProductImage} from "./ProductImage";
import {ProductTitle} from "./ProductTitle";
import {ProductButtons} from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

interface CardProps {
  product: Product;
  children: ( args: ProductCardHandlers ) => JSX.Element
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: OnChangeArgs ) => void;
  value?: number
  initialState?: InitialState
}

const ProductCard = ({ children, product, className, style, onChange, value, initialState }: CardProps) => {

  const { counter, increaseBy, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialState } );

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialState?.maxCount
      }}
    > 
      <div className={`${styles.productCard} ${ className }`} style={style}>
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialState?.maxCount,
            product,
            reset,
            increaseBy
          })
        }
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
