import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

const product = {
  id: 1,
  title:'coffee mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      
      {/* <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title="" />
        <ProductButtons counter={0} increaseBy={function (value: number): void {
          throw new Error("Function not implemented.")
        } }/>
      </ProductCard> */}

      <ProductCard product={product}>
        <ProductImage/>
        <ProductTitle title=''/>
        <ProductButtons />
      </ProductCard>


    </div>
  </div>
)
