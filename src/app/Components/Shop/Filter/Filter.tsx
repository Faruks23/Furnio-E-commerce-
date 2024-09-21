'use client'
import { useState } from "react";
import { FaThLarge, FaThList } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";

export default function ProductFilterBar() {
  const [viewType, setViewType] = useState("grid");
  const [itemsPerPage, setItemsPerPage] = useState <number>(16);
  const [sortBy, setSortBy] = useState("Default");

  return (
    <div className="flex justify-between items-center bg-[#f7f2eb] px-4 py-2 border rounded-md h-[100px]">
      {/* Filter and View Type */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 text-gray-800 hover:text-black">
          <FiFilter className="text-xl" />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* View Icons */}
        <div className="flex items-center space-x-3">
          <button
            className={`text-lg ${viewType === "grid" ? "text-black" : "text-gray-500"}`}
            onClick={() => setViewType("grid")}
          >
            <FaThLarge />
          </button>
          <button
            className={`text-lg ${viewType === "list" ? "text-black" : "text-gray-500"}`}
            onClick={() => setViewType("list")}
          >
            <FaThList />
          </button>
        </div>

        {/* Divider */}
        <span className="h-6 border-l border-gray-300"></span>

        {/* Result Count */}
        <span className="text-sm text-gray-600">Showing 1–16 of 32 results</span>
      </div>

      {/* Show and Sort By */}
      <div className="flex items-center space-x-4">
        {/* Items Per Page */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-800">Show</span>
          <select
            className="border border-gray-300 text-sm px-2 py-1 rounded-md focus:outline-none"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value as any)}
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={64}>64</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-800">Sort by</span>
          <select
            className="border border-gray-300 text-sm px-2 py-1 rounded-md focus:outline-none"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Default">Default</option>
            <option value="Price">Price</option>
            <option value="Popularity">Popularity</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
}
