import { createContext, useContext, useState, type ReactNode } from "react";

type MobileMenuContextValues = {
  isMenuActive: boolean;
  menuToggle: () => void;
};

const MobileMenuContext = createContext<MobileMenuContextValues | undefined>(
  undefined,
);

// eslint-disable-next-line react-refresh/only-export-components
export const useMobileMenuContext = () => {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error("MobileMenuContext must be used inside provider");
  }
  return context;
};

export const MobileMenu = ({ children }: { children: ReactNode }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuToggle = () => {
    setIsMenuActive((prevBool) => !prevBool);
  };

  return (
    <MobileMenuContext.Provider value={{ isMenuActive, menuToggle }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
