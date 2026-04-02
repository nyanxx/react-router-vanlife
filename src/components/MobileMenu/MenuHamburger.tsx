import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useMobileMenuContext } from "./MobileMenu";

export const MenuHamburger = () => {
  const { menuToggle } = useMobileMenuContext();

  return (
    <button
      className="md:hidden my-1 p-1 cursor-pointer"
      onClick={() => menuToggle()}
    >
      <HamburgerMenuIcon className="scale-124" />
    </button>
  );
};
