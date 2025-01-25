import ArrowUp from "../ArrowUp/ArrowUp";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";
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
