import React from 'react';
import data from './../Products.json';
import './style.css';
export default function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    // const [order, setOrder] = useState("ASC");
    // const sorting = (col) => {
    //     if(order === "ASC"){
    //         const sorted = [...data].sort((a, b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1);
    //         setdata(sorted);
    //         setOrder("DSC");
    //     }
    // };
    
    return (
        <table cellPadding={"20px"} cellSpacing={0} className="ml-auto mr-auto">
            <thead className="bg-slate-900 text-white">
                <tr>
                    <th onClick={()=>sorting("productID")}>Product ID</th>
                    <th onClick={()=>sorting("productName")}>Product Name</th>
                    <th onClick={()=>sorting("supplierID")}>Supplier ID</th>
                    <th onClick={()=>sorting("categoryID")}>Category ID</th>
                    <th onClick={()=>sorting("quantityPerUnit")}>Quantity Per Unit</th>
                    <th onClick={()=>sorting("unitPrice")}>Unit Price</th>
                    <th onClick={()=>sorting("unitsInStock")}>Units In Stock</th>
                    <th onClick={()=>sorting("unitsOnOrder")}>Units On Order</th>
                    <th onClick={()=>sorting("reorderLevel")}>Reorder Level</th>
                    <th onClick={()=>sorting("discontinued")}>Discontinued</th>
                </tr>
            </thead>

            <tbody>
                {data.map(row => (
                <tr>
                    {columns.map(column => (
                        <td>{row[column]}</td>
                    ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


