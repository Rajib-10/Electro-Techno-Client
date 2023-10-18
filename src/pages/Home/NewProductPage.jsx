/* eslint-disable react/prop-types */


const NewProductPage = ({product}) => {
    const {productName,brandName,image,description,arrivalDate} = product || {}
    return (
        <div>
           <div className="relative  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img className="h-[300px] w-full  rounded-xl opacity-80"
      src={image}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {productName}
    </h4>
    <p className="block mt-3  text-xl antialiased font-normal leading-relaxed text-gray-700">
      {description.slice(0,80)}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
    <div className="text-xl font-bold">
     {brandName}
    </div>
    <p className="block  text-base antialiased font-normal leading-relaxed text-inherit">
      {arrivalDate}
    </p>
  </div>
</div>
        </div>
    );
};

export default NewProductPage;