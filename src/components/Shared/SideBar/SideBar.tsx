import { MiniMenu } from "./MiniMenu";
import { useMenuStore } from "@/services/store/useMenuStore";
export const SideBar = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div
      className={`pt-[60px] bg-white h-[calc(100vh-120px)] text-black px-[18px] pr-0 border-r border-[rgba(236,236,236,1)] transition-all duration-300 absolute z-50`}
      style={{
        width: isMenuOpen ? "340px" : "77px",
      }}
     onMouseLeave={closeMenu}
    >
      <MiniMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </div>
  );
};
