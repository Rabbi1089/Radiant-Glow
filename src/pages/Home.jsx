import Package from "../components/package/Package";
import Slider from "../components/Slider/Slider";
import TrendingService from "../components/trendingService/TrendingService";



const Home = () => {
  
    return (
        <div>
         <Slider />
        <Package />
        <TrendingService />
        </div>
    );
};

export default Home;