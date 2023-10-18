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
        </div>
    );
};

export default Home;