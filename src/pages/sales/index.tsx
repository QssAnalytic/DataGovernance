import { useState } from "react";
import Filter from "./components/filter";
import Table from "./components/table";



const Sales = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    return (
        <div className="flex flex-col">
            <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Table searchTerm={searchTerm} />
        </div>
    )
}

export default Sales;