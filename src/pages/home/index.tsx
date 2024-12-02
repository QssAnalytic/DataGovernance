import useStore from "@/services/store/useTestZustand"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Home = () => {
    const { bears, increasePopulation } = useStore()
    return (
        <div className="flex items-center justify-center ">
            <div className=" flex flex-col gap-3"> 

                <Link className=" font-bold" to={`/test`}>Test page</Link>
                <h1>{bears} around here...</h1>

                <Button onClick={increasePopulation}> Artır</Button>
            </div>
        </div>
    )
}

export default Home