import ArrowUp from "../../Components/ArrowUp/ArrowUp";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Header/Nav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <main className="mt-10">
        <ArrowUp />

        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
