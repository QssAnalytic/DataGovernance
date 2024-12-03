import DSA_Logo from '../../../assets/DSA_logo (left align) 1.png'
import { useUIStore } from "../../../services/store/useUIStore";
import { Plus } from 'lucide-react';
export const Header = () => {
    const buttonLabel = useUIStore((state) => state.buttonLabel);
    const setModalContent = useUIStore((state) => state.setModalContent);
    return (
        <header className="flex justify-between h-[120px] items-center px-[40px] text-white border-b border-[rgba(236,236,236,1)]">
            <img src={DSA_Logo} alt="" className='w-[210px] h-[60px]' />
            <div>
                <button
                    className="px-[16px] py-3 flex items-center gap-x-[12px] rounded-xl bg-[#22385F] text-sm font-medium"
                    onClick={() => setModalContent(<div>Modal Content</div>)}
                >
                    <Plus />
                    {buttonLabel}
                </button>
            </div>
        </header>
    )
}
