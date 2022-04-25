import { ReactElement } from "react";

export interface Product {
    id: number,
    title: string,
    img?: string
}

export interface Props {
    product: Product,
    children: ReactElement | ReactElement[]
}

export interface ProductButtonProps {
    counter: number,
    increaseBy: (value: number) => void
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ product, children }: Props): JSX.Element,
    Title: ({ title }: { title: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}