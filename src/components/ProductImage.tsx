import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "", className= "" }) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img || product.img || noImage;
  return <img className={`${styles.productImg} ${ className }`} src={imgToShow} alt="Product" />;
};

