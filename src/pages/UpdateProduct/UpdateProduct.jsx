import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [details, setDetails] = useState({});
  const { image, name, brandName, shortDescription, type, price, rating } =
    details || {};
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://electro-techno-server.vercel.app/products/${id}`)
      .then((result) => result.json())
      .then((data) => setDetails(data));
  }, [id]);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const shortDescription = form.shortDescription.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const addProduct = {
      image,
      name,
      brandName,
      shortDescription,
      type,
      price,
      rating,
    };

    console.log(addProduct);

    fetch(`https://electro-techno-server.vercel.app/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product Updated Successfully.");
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold text-center my-8">
        Update Product
      </h1>

      <form className="md:w-[70%] mx-auto p-4" onSubmit={handleAdd}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                defaultValue={image}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row gap-6">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Name"
                name="brandName"
                defaultValue={brandName}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Type"
                name="type"
                defaultValue={type}
                className="w-full input input-bordered"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                name="price"
                defaultValue={price}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                defaultValue={rating}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Short Description"
              name="shortDescription"
              defaultValue={shortDescription}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          className="btn btn-neutral w-full my-4"
          type="submit"
          value="Update"
        />
      </form>

      <Toaster />
    </div>
  );
};

export default UpdateProduct;
