import { FiRotateCw } from "react-icons/fi";

export const OverviewTable = () => {
    const data = [
        {
            id:1,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:2,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:3,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:4,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:5,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:6,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:7,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:8,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:9,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:10,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:11,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:12,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:13,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:14,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:15,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:16,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:17,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:18,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:19,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
        {
            id:20,
            nameSname:"Memmedqaim Xanmemmedov",
            bootNumber:"1",
            contactNumber:"+994 506564794",
            status:"Data Specialist"
        },
    ]
  return (
    <div className='w-full'>
        <div className="tableHeader flex justify-between items-center">
            <div className="leftHeader flex">
                <div className='headerTD p-[16px] font-medium text-[12px] w-[46px]'>ID</div>
                <div className='headerTD p-[16px] font-medium text-[12px] w-[171px]'>Ad və Soyad</div>
                <div className='headerTD p-[16px] font-medium text-[12px] w-[123px]'>Bootcamp № </div>
                <div className='headerTD p-[16px] font-medium text-[12px] w-[143px]'>Contact Number</div>
                <div className='headerTD p-[16px] font-medium text-[12px] w-[170px]'>Status</div>
            </div>
            <div className="rightHeader w-[95px] p-[10px] flex items-center justify-center"><FiRotateCw className='w-[24px] h-[24px]'/></div>
        </div>
        <div className='table'>
            {
                data.map((rowData)=>(
                    <div className="row flex justify-between items-center">
                        <div className="rowLeft flex ">
                            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[46px]">{rowData.id}</div>
                            <div className="p-[16px] font-medium text-[14px] w-[171px]">{rowData.nameSname}</div>
                            <div className="p-[16px] flex items-center justify-center font-medium text-[14px] w-[123px]">{rowData.bootNumber}</div>
                            <div className="p-[16px] font-medium text-[14px] w-[143px]">{rowData.contactNumber}</div>
                            <div className="p-[16px] font-medium text-[14px] w-[170px]">{rowData.status}</div>
                        </div>
                        <div className="rowRight">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ))
            }
            <div>
                
            </div>
        </div>
    </div>
  )
}
