import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {

    const {createUser,updateUserProfile,userLogOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit =e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return toast.error("Invalid Email.")
        }
        if(password.length <6){
            return toast.error("password is less than 6 characters")
        }
        if(!/[A-Z]/.test(password)){
            return toast.error("password  don't have a capital letter")
        }
        if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            return toast.error("password  don't have a special character")
        }
        
        createUser(email,password)
        .then(()=>{
            updateUserProfile(name,photo)
            .then(()=>{
                toast.success("User Created Successfully.")
                userLogOut()
                navigate('/login')
            })
            
        })
       .catch(error=>{
        toast.error(`${error.message}`)
        console.log(error.message)
       })
        
    }

    return (
        <div className="flex justify-center items-center my-10">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-700 ">
  <h1 className="text-2xl font-bold text-center text-white">Register</h1>
  <form  className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-1 text-sm">
          <label  className="block dark:text-gray-400">Name</label>
          <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-md outline-none" />
      </div>
      <div className="space-y-1 text-sm">
          <label  className="block dark:text-gray-400">Photo URL</label>
          <input type="text" name="photo" id="photo" required placeholder="Photo url" className="w-full px-4 py-3 rounded-md outline-none" />
      </div>
      <div className="space-y-1 text-sm">
          <label  className="block dark:text-gray-400">Email</label>
          <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-md outline-none" />
      </div>
      <div className="space-y-1 text-sm">
          <label  className="block dark:text-gray-400">Password</label>
          <input type="password" name="password" id="password" required placeholder="Password" className="w-full px-4 py-3 rounded-md outline-none " />
          
      </div>
      <input type="submit" value="Sign Up" className="block w-full cursor-pointer p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"/>
  </form>
 
  
  <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
      <Link to='/login'  className="underline dark:text-gray-100">Sign In</Link>
  </p>
</div>
        <Toaster />
    </div>
    );
};

export default Register;