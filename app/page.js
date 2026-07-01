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
  const itemsPerPage = 12; // Show 9 items per page
  const [showReservationInfo, setShowReservationInfo] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    // setItemList(ASSETS);
  }, []);

  function handleApplyFilterClick(types) {
    if (!types.startsWith("mice-info") && !types.startsWith("photos-")) {
      setShowFilter(false);
    }

    if (types === "webapp") {
      window.open(
        "https://fairmontmayakoba.duve.co/g/RJSdbyW-t?id=home&isCompany=1",
        "_blank",
      );
      return;
    }

    if (types === "events") {
      window.open(
        "https://www.fairmont-mayakoba.com/explore/events-calendar/",
        "_blank",
      );
      return;
    }

    if (types === "offers") {
      window.open("https://www.fairmont-mayakoba.com/offers/", "_blank");
      return;
    }

    if (types === "video") {
      window.open(
        "https://www.youtube.com/@FairmontMayakobaOfficial",
        "_blank",
      );
      return;
    }

    if (types === "experiences") {
      window.open(
        "https://www.fairmont-mayakoba.com/explore/experiences/#!/",
        "_blank",
      );
      return;
    }

    if (types === "reservations") {
      setShowReservationInfo(true);
      return;
    }

    if (types === "mice-tour") {
      window.open(
        "https://visitingmedia.com/tt8/?ttid=fairmont-riviera-maya#/360?group=6&tour=0",
        "_blank",
      );
      return;
    }

    if (types === "mice-info") {
      setShowFilter(true);
      setFilterType("mice-info");
      return;
    }

    if (types === "photos") {
      setShowFilter(true);
      setFilterType("photos");
      return;
    }

    setShowReservationInfo(false);

    setLoading(true);

    setTimeout(() => {
      const filteredItems = ASSETS.filter((item) =>
        types.length ? types.includes(item.type) : true,
      );
      setItemList(filteredItems);
      setCurrentPage(1);
      setLoading(false);
    }, 500);
  }

  function handleApplyFileTypeFilterClick(types) {
    setLoading(true); // Start loading when filter is applied
    setTimeout(() => {
      const filteredItems = ASSETS.filter((item) =>
        types.length ? types.includes(item.filetype) : true,
      );
      setItemList(filteredItems);
      setCurrentPage(1); // Reset to the first page after filtering
      setLoading(false); // End loading after filtering
    }, 500); // Simulate a delay for loading (you can adjust this)
  }

  function handleItemClick() {}

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(itemList.length / itemsPerPage);

  return (
    <div className="bg-white mb-16">
      <div className="h-[40rem] bg-[url('./assets/header.webp')] bg-cover bg-center"></div>

      <div className="relative text-center pt-16 px-4">
        <h2 className="font-silk-serif text-center text-[2rem] mx-auto">
          <span className="italic">Welcome</span>
          <br /> to <span className="font-semibold">FAIRMONT MAYAKOBA</span>
        </h2>

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

      {showReservationInfo ? (
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-center text-[2rem] mt-16 font-silk-serif">
            Content
          </h2>
          <a href="tel:+52 984 206 3000" className="mt-8">
            +52 984 206 3000
          </a>
          <a href="mailto:myk.reservations@fairmont.com">
            myk.reservations@fairmont.com
          </a>
          <a
            target="_blank"
            href="https://www.fairmont.com/reservations/check-availability/?hc=MYK&partner_id=mykmayakoba&na=2&nc=0&ad=&dd=&pc="
            className="mt-6 bg-black text-white uppercase py-4 px-8 hover:bg-white border-black border-solid border-2 hover:text-black "
          >
            Check rates
          </a>
        </div>
      ) : (
        <div>
          {currentItems.length ? (
            <h2 className="uppercase text-center text-[2rem] mt-16 font-silk-serif">
              Content
            </h2>
          ) : (
            ""
          )}

          <main className="flex md:gap-6 md:px-8 md:mt-16 px-2 gap-2 md:flex-row flex-col">
            {showFilter && (
              <div className="w-full md:w-[160px] flex-shrink-0">
                <Filter
                  type={filterType}
                  onApplyFilterClick={handleApplyFilterClick}
                ></Filter>
              </div>
            )}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 auto-rows-fr">
              {loading ? (
                <div className="col-span-2 md:col-span-4 flex flex-col items-center justify-center py-24 gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-black animate-spin"></div>
                  <p className="font-silk-serif italic text-[1.2rem] tracking-widest text-gray-500">
                    Loading...
                  </p>
                </div>
              ) : (
                currentItems.map((item) => (
                  <Item
                    key={item._ID}
                    data={item}
                    onItemClick={handleItemClick}
                  />
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
      )}
    </div>
  );
}
