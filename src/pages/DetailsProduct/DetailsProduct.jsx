import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const DetailsProduct = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const {user} = useContext(AuthContext)
  


  useEffect(() => {
    fetch(`https://electro-techno-server.vercel.app/products/${id}`)
      .then((result) => result.json())
      .then((data) => setDetails(data));
  }, [id]);

  const handleCart = () => {
    const image = details.image;
    const name = details.name;
    const brandName = details.brandName;
    const email = user.email
    const addCart = { image, name, brandName,email };

    console.log(addCart);

    fetch("https://electro-techno-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCart),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Add to Cart Successfully.");
        }
        console.log(data);
      });
  };

  return (
    <div className="flex items-center justify-center my-6">
      <div className="max-w-lg p-4 shadow-md bg-base-100 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              className="h-[70vh] w-full object-cover rounded-lg"
              src={details.image}
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.name}
              </h3>
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {details.brandName}
              </h3>
            </a>
            <p className=" dark:text-gray-400">{details.shortDescription}</p>
            <button onClick={handleCart} className="btn btn-neutral w-full">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DetailsProduct;
