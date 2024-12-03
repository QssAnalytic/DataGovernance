import { Link } from "react-router-dom"

const TestPage = () => {
    return (
        <div className=" h-screen flex items-center justify-center"> 
            <div className=" flex flex-col gap-2">
                <Link className=" font-bold" to={`/`}> Home page</Link>
                <span> </span>
            </div>
        </div>
    )
}

export default TestPage