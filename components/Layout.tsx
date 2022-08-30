import Navbar from "components/Navigation/NavBar";
import Footer from "./Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="font-khTeka px-6 lg:px-8 mx-auto">
      <div className="flex-col w-full h-full">
        <header className="w-full h-[112px]">
          <Navbar />
        </header>
        <main className="mt-4 md:mt-[48px]">
          {props.children}
        </main>
        <div className="lg:mt-20">
          <div className="hidden md:block">
            <img src="/images/footer-background.svg" alt="" className="rounded-lg w-full object-cover" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;