import { ReactElement } from "react";
import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: number,
    title: string,
    img?: string
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ({ title, className }: ProductTitleProps) => JSX.Element,
    Image: ({ img, className }: ProductImageProps ) => JSX.Element,
    Buttons: ( Props : ProductButtonProps) => JSX.Element
}