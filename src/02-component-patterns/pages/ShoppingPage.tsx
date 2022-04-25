import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';

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
      
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title="nueva asdasd" />
        <ProductButtons/>
      </ProductCard>

      <ProductCard product={product}>
        <ProductImage/>
        <ProductTitle title=''/>
        <ProductButtons />
      </ProductCard>


    </div>
  </div>
)
