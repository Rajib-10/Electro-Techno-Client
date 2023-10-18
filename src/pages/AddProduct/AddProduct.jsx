

const AddProduct = () => {
    const handleAdd =e=>{
        e.preventDefault()
       const form = e.target
       const image = form.image.value
       const name = form.name.value
       const brandName = form.brandName.value
       const shortDescription = form.shortDescription.value
       const type = form.type.value
       const price = form.price.value
       const rating = form.rating.value
       const addProduct = {image,name,brandName,shortDescription,type,price,rating}
       console.log(addProduct)
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-8">Add Product</h1>

            <form className="md:w-[60%] mx-auto" onSubmit={handleAdd}>
                <div className="flex flex-col md:flex-row gap-6">
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Image URL" name="image" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                </label>
            </div>
                </div>

            <div className="flex  flex-col md:flex-row gap-6">
                <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered" />
                </label>
                  </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Type</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Type" name="type" className="input input-bordered" />
                </label>
              </div>
            </div>



            <div className="flex flex-col md:flex-row  gap-6">
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Price" name="price" className="input input-bordered" />
                </label>
                  </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                    <input type="number" placeholder="Rating" name="rating" className="input input-bordered" />
                </label>
              </div>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered w-full" />
                </label>
              </div>
                <input className="btn btn-neutral w-full my-4" type="submit" value="Add Product" />
            </form>

        </div>
    );
};

export default AddProduct;