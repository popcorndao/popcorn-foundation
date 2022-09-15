import Navbar from "components/Navigation/NavBar";
import Footer from "./Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="font-khTeka px-6 lg:px-8 mx-auto 2xl:w-[90%]">
      <div className="flex-col w-full h-full">
        <header className="w-full h-[112px]">
          <Navbar />
        </header>
        <main className="mt-4 md:mt-[48px]">
          {props.children}
        </main>
        <div className="md:mt-20">
          <div className="hidden">
            <img src="/images/nature.png" alt="nature" className="rounded-lg w-full object-cover" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;