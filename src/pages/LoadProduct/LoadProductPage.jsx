/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Helmet } from 'react-helmet';
import Rating from 'react-rating-stars-component';
import { Link } from "react-router-dom";



const LoadProductPage = ({product}) => {
    const {_id,image,name,brandName,type,price,rating} = product || {}
    return (
        <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative w-[46%] md:w-[60%] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      class=" object-cover  w-full h-full lg:h-[400px]"
    />
  </div>
  <div class="p-6">
    <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {name}
    </h6>
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {brandName}
    </h4>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     {type}
    </p>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     <Rating
            count={5}
            value={rating}
            size={24}
            edit={false} 
            color2={'#ffd700'} 
          />



    </p>
    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     ${price}
    </p>
    
      <Link to={`/detailsProduct/${_id}`}
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </Link>

      <Link to={`/updateProduct/${_id}`}
        class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Update
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </Link>
    
  </div>
  <Helmet>
      <title>Electro&Techno | Brand Product</title>
    </Helmet>
    
</div>
    );
};

export default LoadProductPage;