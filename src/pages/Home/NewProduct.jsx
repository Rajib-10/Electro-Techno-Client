import { useEffect, useState } from "react";
import NewProductPage from "./NewProductPage";

const NewProduct = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('/new.json')
        .then(result=> result.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">New Arrival Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map(product=> <NewProductPage key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default NewProduct;