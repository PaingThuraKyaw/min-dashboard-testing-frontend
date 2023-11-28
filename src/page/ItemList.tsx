import { useItem } from "@/store/query";
import {  useState } from "react";
import { DataTable } from "./ItemListTable/Datatable";
import { columns } from "./ItemListTable/Column";

const ItemList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useItem(page);

  console.log(data?.data);


  if (isLoading) {
    return <h2>show</h2>;
  }

  return (
    <div>
      {data && (
        <DataTable columns={columns} setPage={setPage} count={data.count} data={data.data} page={page} />
      )}
    </div>
  );
};

export default ItemList;
