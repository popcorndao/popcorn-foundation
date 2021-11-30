import Link from "next/link";

interface NavbarLinkProps {
  label: string;
  url?: string;
  isActive: boolean;
  onClick?: Function;
  target?: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  label,
  url,
  isActive,
  onClick,
  target,
}) => {
  if (!url) {
    return (
      <a
        className={`
        text-xl
        font-light 
        hover:font-bold
        ${isActive ? "text-gray-900 font-semibold" : "text-gray-600"}
      `}
        target={target || "_self"}
        onClick={(e) => {
          onClick && onClick();
        }}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={url || ""} passHref>
      <a
        className={`
        text-xl
        font-light 
        hover:font-bold
        ${isActive ? "text-gray-900 font-semibold" : "text-gray-600"}
      `}
        target={target || "_self"}
        onClick={(e) => {
          onClick && onClick();
        }}
      >
        {label}
      </a>
    </Link>
  );
};
export default NavbarLink;
