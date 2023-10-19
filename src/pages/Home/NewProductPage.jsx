/* eslint-disable react/prop-types */


const NewProductPage = ({product}) => {
    const {productName,brandName,image,description,arrivalDate} = product || {}
    return (
        <div>
           <div className="relative  flex-col rounded-xl bg-white  shadow-md font-poppins">
  <div className="relative  ">
    <img className="h-[300px] w-full  rounded-xl opacity-80"
      src={image}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block text-xl md:text-2xl lg:text-xl xl:text-2xl  font-semibold  ">
      {productName}
    </h4>
    <p className="block mt-3  text-xl lg:text-[17px] xl:text-xl  font-normal  ">
      {description.slice(0,80)}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
    <div className="text-xl font-bold">
     {brandName}
    </div>
    <p className="block  text-base  font-normal ">
      {arrivalDate}
    </p>
  </div>
</div>
        </div>
    );
};

export default NewProductPage;