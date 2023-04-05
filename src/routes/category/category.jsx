import { 
    useContext, 
    useState, 
    useEffect,
    Fragment 
} from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
    <h2 className='text-3xl mb-7 text-center'>
    {category.toUpperCase()}
    </h2>
    <div className='grid gap-y-[50px] gap-x-[20px] grid-cols-4'>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </Fragment>
  );
};

export default Category;