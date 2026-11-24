"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { categories } from "@/lib/categories";

// Context value type
interface NavigationContextType {
  scrolled: boolean;
  setScrolled: Dispatch<SetStateAction<boolean>>;
  navmenu: boolean;
  setNavmenu: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  categories: readonly string[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export const NavigationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State for scrolling page
  const [scrolled, setScrolled] = useState(false);
  // Navigation menu state
  const [navmenu, setNavmenu] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        //* Only in navigation
        scrolled,
        setScrolled,
        navmenu,
        setNavmenu,
        //! in popup and book a call
        showModal,
        setShowModal,
        categories,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationContextProvider",
    );
  }
  return context;
};
