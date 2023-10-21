import { Helmet } from "react-helmet";
import Banner from "../../components/Header/Banner";
import Brand from "./Brand";
import NewProduct from "./NewProduct";
import TopSelling from "./TopSelling";


const Home = () => {
    return (
        <div>
            <Banner />
            <Brand />
            <NewProduct />
            <TopSelling />
            <Helmet>
                <title>Electro&Techno | Home</title>
            </Helmet>
        </div>
    );
};

export default Home;