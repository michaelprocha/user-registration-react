import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="dark:bg-black bg-white h-full px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
