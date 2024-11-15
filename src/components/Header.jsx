
import NavigationBar from "./navigationBar";

const Header = () => {
  return (
    <div className="mx-auto">
      <div className="md:flex mx-auto justify-between px-3 py-1.5 text-white bg-black">
        <marquee>
          <span className=" text-2xl font-serif">
            Up-to 20% discounts on Facial! Limited slots left in your area today
          </span>
        </marquee>
        <div className=" mx-6 w-1/4">
          <h1>Call for Booking +880 9613224433</h1>
        </div>
      </div>

      <NavigationBar></NavigationBar>
    </div>
  );
};

export default Header;
