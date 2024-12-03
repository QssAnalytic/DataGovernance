import DSA_Logo from '../../../assets/DSA_logo (left align) 1.png'
import { HeaderProfileSide } from './HeaderProfileSide';
import { ChangingContent } from './ChangingContent';
export const Header = () => {
    return (
        <header className="flex justify-between h-[120px] items-center px-[40px] text-white border-b border-[rgba(236,236,236,1)]">
            <img src={DSA_Logo} alt="" className='w-[210px] h-[60px]' />
            <div className='flex gap-x-[20px] items-center'>
                <ChangingContent/>
                <HeaderProfileSide/>
            </div>
        </header>
    )
}
