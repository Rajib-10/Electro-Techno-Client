import { useEffect, useState } from "react";
import BrandPage from "./BrandPage";


const Brand = () => {
    const [brand,setBrand] = useState([])
    useEffect(()=>{
        fetch('/brand.json')
        .then(result=> result.json())
        .then(data => setBrand(data))
    },[])
    return (
        <div>
            <h1 className="text-xl md:text-3xl font-bold text-center my-6">At a Glance of Our Brand!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                {
                    brand?.map(item=> <BrandPage key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Brand;