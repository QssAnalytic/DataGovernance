import searchIcn from '../../../../assets/icons/search-lg.svg';
import FilterData from '../filter-data';


interface FilterProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}
const Filter: React.FC<FilterProps>  = ({ searchTerm, setSearchTerm }) => {

    return (
        <div className="flex mt-10 h-[90px] px-7 z-10 justify-around gap-[10rem]">
            <div className='flex relative justify-center  w-[296px]  border-[0.5px]  bg-[#FAFCFF] border-[#22385F] rounded-xl h-[56px]  px-[16px] py-[14px] '>
                <img src={searchIcn} className='mr-2' alt="search icon" />
                <input type="text" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} className="  w-[296px] focus:outline-none  placeholder-font-montserrat placeholder-text-[14px] placeholder-leading-[17.07px]  placeholder-font-normal " placeholder="Ad, soyad və ya nömrə axtar" />
            </div>
            <FilterData />


        </div>
    )
}

export default Filter