import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

type TitleProps = {
  title?: string
  className?: string
}

export const ProductTitle = ({ title, className }: TitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={`${styles.productDescription} ${ className }`}>
      {" "}
      {title || product.title}{" "}
    </span>
  );
};
