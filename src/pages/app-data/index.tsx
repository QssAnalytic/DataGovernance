import Filter from "./components/filter"
import Table from './components/table'
const  ApplicationData = () => {
  
    return (
        <div className="flex relative flex-col">
          <Filter />
          <Table />
        </div>
    )
}

export default ApplicationData