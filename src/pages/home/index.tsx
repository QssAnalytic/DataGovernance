import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useUIStore } from "../../services/store/useUIStore";
import { useEffect } from "react";
import { DatePickerWithRange } from "./DateRangePicker";

const Home = () => {
    const {setButtonLabel,setPageCustomHeader,setModalContent} = useUIStore()
    useEffect(()=>{
        setButtonLabel('Home Page')
        setModalContent(<div className="text-black">home pageModal</div>)
        setPageCustomHeader(<DatePickerWithRange/>)
    },[setButtonLabel, setModalContent, setPageCustomHeader])
    return (
        <div className="flex items-center justify-center ">
            <div className=" flex flex-col gap-3">

                <Link className=" font-bold" to={`/test`}>Test page</Link>
                <h1> around here...</h1>

                <Button>Artır</Button>
            </div>
        </div>
    )
}

export default Home