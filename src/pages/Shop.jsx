import ProductCard from '../components/ProductCard';
import { useProduct } from '../hooks/productHook.jsx';

const Shop = () => {

   const {isPending, data, error} = useProduct();

   if(error) return <h1>{error}</h1>
  return (
    <div className="flex flex-wrap gap-10 py-20 px-20">
       {isPending
        ?
        Array.from({length:8}).map((_,index) => {
           <ProductCard key={index}/>
        })
        :
        data.map((product) => {
          return <ProductCard key={product.id} product={product}/>
       })
       }
    </div>
  )
}

export default Shop;
