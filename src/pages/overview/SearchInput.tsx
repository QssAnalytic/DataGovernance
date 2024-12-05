import { Input } from '@/components/ui/input'
import { FiSearch } from "react-icons/fi";

export const SearchInput = () => {
  return (
    <div className="relative w-[296px] h-[48px]">
      <FiSearch className="absolute w-[20px] h-[20px] top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Ad, Soyad və ya Nömrə axtar"
        className="py-[12px] px-[25px] h-full pl-11 text-black rounded-[12px] focus-visible:outline-[#22385F] focus-visible:outline-1"
        style={{border:"0.5px solid #22385F"}}
      />
    </div>
  )
}
