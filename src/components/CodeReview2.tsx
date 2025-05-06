// DO NOT REMOVE THESE COMMENTS, that'd be cheating ;)
/* eslint-disable */
// @ts-nocheck
import React, { useState } from "react";

const initialItems: any[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
];

export const FilterableList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<any>("");

  const filteredItems = initialItems.filter((item) => {
    return item.name.includes(searchTerm);
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-4 m-2 border rounded">
      {" "}
      <h2 className="text-xl mb-3 gc-4 mb-2">Filterable List</h2>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 mb-4 w-full mx-auto inline-block"
      />
      <ul className="list-none p-0 m-0">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="border-b p-2 bg-gray-50 hover:bg-gray-100"
          >
            {item.name}
          </div>
        ))}
      </ul>
      {filteredItems.length === 0 && (
        <p className="text-gray-500 italic">No items match your search.</p>
      )}
    </div>
  );
};

export default FilterableList;
