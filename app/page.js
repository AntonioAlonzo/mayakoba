"use client";

import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { ASSETS } from "../components/data.js";
import Item from "../components/Item";
import FileTypeFilter from "../components/FileTypeFilter";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa"; // Importing icons

export default function Home() {
  const [itemList, setItemList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state
  const itemsPerPage = 9; // Show 9 items per page

  useEffect(() => {
    setItemList(ASSETS);
  }, []);

  function handleApplyFilterClick(types) {
    setLoading(true); // Start loading when filter is applied
    setTimeout(() => {
      const filteredItems = ASSETS.filter((item) =>
        types.length ? types.includes(item.type) : true
      );
      setItemList(filteredItems);
      setCurrentPage(1); // Reset to the first page after filtering
      setLoading(false); // End loading after filtering
    }, 500); // Simulate a delay for loading (you can adjust this)
  }

  function handleApplyFileTypeFilterClick(types) {
    setLoading(true); // Start loading when filter is applied
    setTimeout(() => {
      const filteredItems = ASSETS.filter((item) =>
        types.length ? types.includes(item.filetype) : true
      );
      setItemList(filteredItems);
      setCurrentPage(1); // Reset to the first page after filtering
      setLoading(false); // End loading after filtering
    }, 500); // Simulate a delay for loading (you can adjust this)
  }

  function handleItemClick() {}

  // Get the current items based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(itemList.length / itemsPerPage);

  return (
    <div className="bg-white mb-16">
      <div className="h-[40rem] bg-[url('./assets/header.webp')] bg-cover bg-center"></div>

      <div className="relative text-center pt-16 px-4">
        {/* Flex container for title */}
        <h2 className="font-silk-serif text-center text-[2rem] mx-auto">
          <span className="italic">Welcome</span>
          <br /> to <span className="font-semibold">FAIRMONT MAYAKOBA</span>
        </h2>

        {/* Social media and website icons */}
        <div className="absolute right-4 top-0 mt-4 flex space-x-6">
          <a
            href="https://www.facebook.com/FairmontMayakoba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://x.com/fairmontmayakoba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/fairmontmayakoba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.fairmont-mayakoba.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-xl" />
          </a>
        </div>

        <p className="text-center sm:w-[80%] md:w-[40rem] mx-auto mt-10 font-itc-franklin">
          Escape to a tropical paradise in the lush rainforest of Mexico’s
          Riviera Maya. Discover our magnificent 594-acre private community on
          the Caribbean shoreline, which is newly renovated and totally
          reimagined.
        </p>
      </div>

      <FileTypeFilter
        onApplyFilterClick={handleApplyFilterClick}
      ></FileTypeFilter>

      <h2 className="uppercase text-center text-[2rem] mt-16 font-silk-serif">
        Assets | Fairmont Mayakoba
      </h2>

      <main className="flex md:gap-40 md:px-32 md:mt-16 px-2 gap-2 md:flex-row flex-col">
        {/** 
        <div className="w-full md:w-1/6">
          <Filter onApplyFilterClick={handleApplyFilterClick}></Filter>
        </div>
        */}
        <div className="w-full  grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-7 ">
          {loading ? (
            <div className="col-span-2 md:col-span-3 text-center">
              <p>Loading...</p>
            </div>
          ) : (
            currentItems.map((item) => (
              <Item key={item._ID} data={item} onItemClick={handleItemClick} />
            ))
          )}
        </div>
      </main>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 border ${
              currentPage === index + 1 ? "bg-gray-300" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
