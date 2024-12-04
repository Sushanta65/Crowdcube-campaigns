import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <section>
        <Navbar></Navbar>
      </section>
      <section className="w-4/5 mx-auto">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default MainLayout;
