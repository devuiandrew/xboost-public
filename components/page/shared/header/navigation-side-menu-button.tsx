"use client";
import { useNavigationContext } from "@/context/context-api";
import { BiMenu } from "react-icons/bi";

export function NavigaitonSideMenuButton() {
  const { navmenu, setNavmenu } = useNavigationContext();
  return (
    <button
      className="rounded-xs hover:shadow-inner"
      onClick={() => setNavmenu(!navmenu)}
    >
      <BiMenu size={60} className="text-boost-green" />
    </button>
  );
}
