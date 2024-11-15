import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <div className="flex-1">
    <Header></Header>
    <Outlet></Outlet>
  </div>
      <Footer></Footer>
    </div>

    </>
  );
};

export default Main;
