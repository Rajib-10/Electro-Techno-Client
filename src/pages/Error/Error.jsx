import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
            <img className="mx-auto h-[70vh]" src="https://i.ibb.co/y5PJNLW/404.jpg" alt="" />
            <Link className="btn btn-secondary mt-10" to='/'>Back Home</Link>
            </div>
        </div>
    );
};

export default Error;