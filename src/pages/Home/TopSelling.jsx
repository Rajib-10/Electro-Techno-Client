import { useEffect, useState } from "react";
import TopSellingPage from "./TopSellingPage";

const TopSelling = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('/top.json')
        .then(result=> result.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-8">Top Selling Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products?.map(product=> <TopSellingPage key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default TopSelling;