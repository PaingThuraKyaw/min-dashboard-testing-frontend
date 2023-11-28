import Header from "@/Navbar/header";
import Nav from "@/Navbar/nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" px-8">
      <Header />
      <div className=" gap-8 grid grid-cols-12">
        <div className=" col-span-3">
          <Nav />
        </div>
        <div className=" col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
