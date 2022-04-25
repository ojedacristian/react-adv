import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext, useContext } from 'react';


interface Product {
    id: number,
    title: string,
    img?: string
}

interface Props {
    product: Product,
    children: ReactElement | ReactElement[]
}
interface ProductButtonProps {
    counter: number,
    increaseBy: (value: number) => void
}

interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
}

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext



export const ProductImage = ({ img = '' }) => {
    const { product }= useContext(ProductContext)
    let imgToShow: string
    if(img) {
        imgToShow = img
    } else if (product.img) {
        imgToShow = product.img
    } else{
        imgToShow = noImage;
    }
    return (
        <img className={styles.productImg} src={ imgToShow } alt='coffee-mug' />
    )}

export const ProductTitle = ({ title }: { title: string }) => {
    const { product } = useContext(ProductContext)
    return (
        <span className={styles.productDescription}>
            { title ? title : product.title}
        </span>
    )
}
export const ProductButtons = () => {
    const {increaseBy, counter} = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}> - </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd}
                onClick={() => increaseBy(1)}>+</button>
        </div>
    )
}

export const ProductCard = ({ product, children }: Props) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {/* <ProductImg img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
                {children}
            </div>
            <div className={styles.productCard}>
            <ProductImage />
            <ProductTitle title='Nueva taza' />
            <ProductButtons />
                {/* {children} */}
            </div>

        </Provider>
    )
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;