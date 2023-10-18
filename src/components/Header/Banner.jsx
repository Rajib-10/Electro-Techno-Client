
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0XysKbG/background.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Warm Welcome to Electro&Techno</h1>
                <p className="mb-5">Your Gateway to Cutting-Edge Electronics and Technology.</p>
                
                </div>
            </div>
        </div>
    );
};

export default Banner;