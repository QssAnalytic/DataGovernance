import {useState} from 'react'
import { OverMenu } from './OverMenu'
import { MiniMenu } from './MiniMenu'
import { useMenuStore } from '@/services/store/useMenuStore'
export const SideBar = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div 
    className={`pt-[60px] bg-white text-black px-[18px] border-r border-[rgba(236,236,236,1)] transition-all duration-300 absolute`}
      style={{
        width: isMenuOpen ? '340px' : '77px',

      }}
    >
      <MiniMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      
    </div>
  )
}
