import React, {useState, useEffect} from "react"
import Datatable from "./datatable";

export default function App(){
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["productName", "supplierID"]);

  useEffect(() => { 
    fetch("src/Products.json")
    .then((response) => response.json())
    .then((json) => setData(json));
  }, []);


  function Search(rows){
    return rows.filter(
    (row) => 
    searchColumns.some((column) =>
      row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <div className="flex flex-1 justify-center mt-10 mb-3">
        <h3 className="text-4xl text-slate-900">Atlan Assignment</h3>
        <a href="https://github.com/adisin361/Atlan-Front-End-Assignment" target="_blank"><button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  GitHub</button></a>
      </div>

      <div className="mr-10 mb-10 ml-20">
        <input className="mt-4 rounded-lg bg-[#ededed] h-8" type="text" placeholder = "Search" value = {q} onChange={(e) => setQ(e.target.value)} />

        {columns && columns.map((column) => <label>
            <input className="ml-5 mr-3 h-4 w-4" type="checkbox" checked={searchColumns.includes(column)} onChange={(e) => {
              const checked = searchColumns.includes(column)
              setSearchColumns(prev => checked
                ? prev.filter(sc => sc !== column)
                : [...prev, column]
                );
            }} />
            {column}</label>)}
      </div>

      <div>
        <Datatable data = {Search(data)}/>
      </div>

    </div>
  );
}

