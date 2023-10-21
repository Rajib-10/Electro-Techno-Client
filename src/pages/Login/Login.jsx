/* eslint-disable react/no-unknown-property */

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const Login = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const {googleLogin,userSign} = useContext(AuthContext)

    const handleSubmit =e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
		userSign(email,password)
		.then(result=>{
			toast.success("User logged in Successfully.")
			navigate(location?.state ? location.state : "/")
			console.log(result.user)
		})
		.catch(error=>{
			toast.error(`${error.message}`)
			console.log(error.message)
		})
        
    }

    const handleGoogle=()=>{
        googleLogin()
		.then(result=>{
			toast.success("User logged in Successfully.")
			navigate(location?.state ? location.state : "/")
			console.log(result.user)
		})
		.catch(error=>{
			toast.error(`${error.message}`)
			console.log(error.message)
		})
    }

    return (
		
      <div className="flex justify-center items-center my-10">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-700 ">
	<h1 className="text-2xl font-bold text-center text-white">Login</h1>
	<form  className="space-y-6" onSubmit={handleSubmit}>
		<div className="space-y-1 text-sm">
			<label for="username" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" required id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md outline-none" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password" required id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md outline-none " />
			
		</div>
		<input type="submit" value="Sign IN" className="block w-full cursor-pointer p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"/>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogle} className="p-3 rounded-sm">
			<FcGoogle className="text-2xl" />
		</button>
		
		
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don not have an account?
		<Link to='/register'  className="underline dark:text-gray-100">Sign up</Link>
	</p>
</div>
<Toaster/>
		<Helmet>
			<title>Electro&Techno | Login</title>
		</Helmet>
      </div>
    );
};

export default Login;