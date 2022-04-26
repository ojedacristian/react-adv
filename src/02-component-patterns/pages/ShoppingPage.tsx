import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/';
import '../styles/custom-styles.css'

const product = {
  id: 1,
  title: 'coffee mug',
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

      <ProductCard
        style={{ background: '#1ab3cc' }}
        product={product}
        className='bg-dark'>
        <ProductCard.Image />
        <ProductCard.Title title="nueva asdasd" className='text-white' />
        <ProductButtons style={{ background: '#1eb9ed' }}
        />
      </ProductCard>

      <ProductCard
        product={product}
        style={{ background: '#1eb9ed' }}
        className='bg-dark'>
        <ProductImage
          className='radius'
        // style={{ width: '200px' }} 
        />
        <ProductTitle
          title=''
          className='text-white'
          style={{ fontWeight: 'bold' }} />
        <ProductButtons
          style={{ fontWeight: 'bold' }}
          className='border-white' />
      </ProductCard>


    </div>
  </div>
)
