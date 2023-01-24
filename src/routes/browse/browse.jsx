import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card";

const Browse = () => {
    const { products } = useContext(ProductsContext)
    return (
     <div>
     {products.map((product) => (
       <ProductCard key={products.id} product={product} />
        ))} 
     </div>
    );
};

export default Browse;