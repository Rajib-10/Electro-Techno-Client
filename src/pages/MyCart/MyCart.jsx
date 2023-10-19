import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";



const MyCart = () => {
    

	const [products,setProducts] = useState([])

	useEffect(()=>{
		fetch("http://localhost:5000/cart")
		.then(result=> result.json())
		.then(data=> setProducts(data))
	},[])

	const handleRemove=id=>{
		console.log("id",id)
		fetch(`http://localhost:5000/cart/${id}`,{
			method:"DELETE"
		})
		.then(result=>result.json())
		.then(data=>{
			if(data.deletedCount > 0){
				toast.success("Remove from Cart Successfully!!!")
				const remaining = products?.filter(product=> product._id!==id)
				setProducts(remaining)
			}
			console.log(data)
		})
	}

    return (
        <div className="flex justify-center items-center py-10">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<h2 className="text-xl font-semibold">Your cart:{products.length}</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
		{
			products?.map(product=> <li key={product._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.image} alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold  sm:pr-8">{product.name}</h3>
							<p className="text-sm dark:text-gray-400">{product.brandName}</p>
						</div>
						
					</div>
					<div className="flex text-sm divide-x">
						<button onClick={()=>handleRemove(product._id)} type="button" className=" px-4 py-1  space-x-1 btn btn-neutral">
							
							Remove
						</button>
						
					</div>
				</div>
			</div>
		</li>)
		}
		
		
	</ul>

	
            </div>
			<Toaster />
        </div>
    );
};

export default MyCart;