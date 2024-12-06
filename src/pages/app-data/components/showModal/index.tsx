import { ShowModalProps } from "../../types"
const ShowModal: React.FC<ShowModalProps> = ({ handleCancelDelete, handleConfirmDelete }) => {
    return <div className="fixed inset-0 z-50 flex items-center justify-center   bg-[#000000] rounded-lg bg-opacity-70">
        <div className="bg-white p-6 rounded-lg shadow-custom w-[328px] h-[153px]">
            <h2 className="text-lg font-semibold">
                Əminsinizmi ?
            </h2>

            <div className="mt-4 flex justify-center space-x-2">
                <button
                    onClick={handleCancelDelete}
                    className="w-[140px] h-[43px] py-[12] px-[16px] rounded-lg flex justify-center items-center gap-12px bg-[#fff] border border-[1px] font-montserrat border-[#22385F] text-[#22385F] text-[14px] font-medium"
                >
                    Xeyr
                </button>
                <button
                    onClick={handleConfirmDelete}
                    className="w-[140px] h-[43px] py-[12] px-[16px] rounded-lg flex justify-center items-center gap-12px bg-[#DC4242] text-[#fff] font-montserrat text-[14px] font-medium "
                >
                    Bəli, sil
                </button>
            </div>
        </div>
    </div>
}

export default ShowModal 