import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="flex flex-col mb-8 ">
     <h2>
       <Link className="text-3xl mb-6 cursor-pointer" to={title} >
        {title.toUpperCase()}
       </Link>
     </h2>
     <div className='grid grid-cols-4 gap-[20px] '>
      {
        products
         .filter((_, idx) => idx < 4)
         .map((product) => 
         <ProductCard key={product.id} product={product}/>)
      }
      </div>
  </div>
  )
}

export default CategoryPreview;