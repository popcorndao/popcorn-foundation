import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="hidden md:flex bg-white z-10 h-full">
        <DesktopMenu />
      </nav>
      <nav className="md:hidden w-full h-full relative">
        <MobileMenu />
      </nav>
    </>
  );
};
export default Navbar;
