import React from "react";
import "./dtable.css";

interface Column {
    id: string;
    titulo: string;
}

interface TableProps {
    columns: Column[];
    dataSource: Record<string, any>[];
}

const DTable: React.FC<TableProps> = ({ columns, dataSource }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.id} className="dtable-header">
                            {column.titulo}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSource.length > 0 ? (
                    dataSource.map((row, index) => (
                        <tr key={index} className="dtable-row">
                            {columns.map((column) => (
                                <td key={column.id} className="table-cell">
                                    {row[column.id] || ""}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="dtable-cell no-data">
                            Não há dados para exibir
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DTable;