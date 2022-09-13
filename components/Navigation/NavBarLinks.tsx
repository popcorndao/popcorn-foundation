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
  const className = `leading-[100%] text-5xl md:text-lg ${isActive ? "text-black font-medium" : "text-primary"} 
    hover:text-black cursor-pointer
  `;
  if (!url) {
    return (
      <a
        className={className}
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
        className={className}
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
