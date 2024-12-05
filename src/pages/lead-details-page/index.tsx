import ContactTable from "./components/Contact Table";
import TableInfoSection from "./components/Table Info Section";
import { data, headers } from "./static";

const DetailsPage = () => {
  return (
    <div className="p-[50px]">
      <TableInfoSection />
      <ContactTable headers={headers} data={data} />
    </div>
  );
};

export default DetailsPage;
