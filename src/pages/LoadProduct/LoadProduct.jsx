import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadProductPage from "./LoadProductPage";


const LoadProduct = () => {
    const {brandName} = useParams()
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
          .then(result => result.json())
          .then(data => {
            const filteredProducts = data.filter(product =>
              product.brandName.toLowerCase() === brandName.toLowerCase());
            setProducts(filteredProducts);
          });
      }, [brandName]);
    return (
        <div>
            {/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/swKG3NJ/samsung2.jpg" className="w-full h-[70vh] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/QrdnsLC/mackbookpro.jpg" className="w-full h-[70vh] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/2gqg2JB/pixel.jpg" className="w-full h-[70vh] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full  ">
    <img src="https://i.ibb.co/jJwbYX3/appleairbud.jpg" className="w-full h-[70vh] object-cover" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
            </div> */}

            <h1 className="text-3xl font-bold text-center">total products :{products.length}</h1>
            {
              products?.length <=0 ? <div className="flex justify-center items-center h-[70vh]"><h1 className="text-red-700 text-3xl font-bold">There is no available product right now!!!</h1></div> 
              :
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {
                products?.map(product=> <LoadProductPage key={product._id} product={product} />)
              }
            </div>
            }
            
        </div>
    );
};

export default LoadProduct;