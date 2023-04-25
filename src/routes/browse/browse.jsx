import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card";

const Browse = () => {
    const { products } = useContext(ProductsContext)
    return (
     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2.5">
     {products.map((product) => (
       <ProductCard key={products.id} product={product} />
        ))} 
     </div>
    );
};

export default Browse;