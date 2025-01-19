import { ReactNode } from "react";

interface TableColumn {
  header: string;
  width?: string;
}

interface TableTemplateProps<T> {
  items: T[];
  columns: TableColumn[];
  getCellContents: (item: T) => ReactNode[];
}

const TableTemplate = <T,>({
  items,
  columns,
  getCellContents,
}: TableTemplateProps<T>) => {
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-dark-6 text-left dark:bg-dark-2">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`${column.width ? `min-w-[${column.width}]` : ""} px-4 py-4 font-medium text-dark dark:text-white ${
                    index === columns.length - 1
                      ? "rounded-tr-[10px] text-right xl:pr-7.5"
                      : index === 0
                        ? "rounded-tl-[10px] xl:pl-7.5"
                        : ""
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, rowIndex) => {
              const cellContents = getCellContents(item);
              return (
                <tr
                  key={rowIndex}
                  className="transition-colors duration-200 hover:bg-gray-3 dark:hover:bg-dark-2"
                >
                  {cellContents.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                        rowIndex === items.length - 1
                          ? "border-b-0"
                          : "border-b"
                      } ${colIndex === columns.length - 1 ? "text-right" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTemplate;
