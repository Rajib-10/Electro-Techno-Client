/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BrandPage = ({item}) => {
    const {brandName,brandImage} = item || {}
    return (
        <div>
            <Link to='/loadProduct'>
            <div className="card h-[250px]  bg-base-100 shadow-xl image-full">
                <figure><img className="w-full object-cover" src={brandImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold flex justify-center items-end h-full text-gray-300">{brandName}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default BrandPage;