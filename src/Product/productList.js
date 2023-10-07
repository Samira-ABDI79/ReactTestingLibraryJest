
import { useState } from 'react';
import Product from './product';

const products=[
    {
        id:1,
        title:"product 1" ,
        price:'234$',
        label:'label1',
        bg:'bg-lime-400',
    },
    {
        id:2,
        title:"product 2" ,
        price:'234$',
        label:'label2',
        bg:'bg-green-400',
    },
    {
        id:3,
        title:"product 3" ,
        price:'334$',
        label:'label3',
        bg:'bg-emerald-600',
    },
    {
        id:4,
        title:"product 4" ,
        price:'444$',
        label:'label4',
        bg:'bg-teal-600',
    },
    {
        id:5,
        title:"product 5" ,
        price:'555$',
        label:'label5',
        bg:'bg-cyan-600',
    },
    {
        id:6,
        title:"product 6" ,
        price:'666$',
        label:'label6',
        bg:'bg-sky-800',
    },
    {
        id:7,
        title:"product 7" ,
        price:'777$',
        label:'label7',
        bg:'bg-blue-800',
    },
]
export default function ProductList(){
    const [visibleProducts, setVisibleProducts] = useState(3);

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts +3 );
  };

  return (
    <>
      <div className='container mx-auto py-16 my-16'>
        <div className='flex justify-between items-center gap-4 flex-wrap'>
          {products.slice(0, visibleProducts).map(item => (
            <Product title={item.title} label={item.label} price={item.price} bg={item.bg} key={item.id} />
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-10'
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}