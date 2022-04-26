import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext, useContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductImage, ProductButtons, ProductTitle } from '../components';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext


export interface Props {
    product: Product,
    children: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${styles.productCard} ${className}` }
                style={ style }
            >
                {/* <ProductImg img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
                {children}
            </div>

        </Provider>
    )
}

