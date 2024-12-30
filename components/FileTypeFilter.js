"use client";

import React from "react";

export default function FileTypeFilter({ onApplyFilterClick }) {
  function handleTypeClick(type) {
    onApplyFilterClick(type);
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 mt-10 mx-3">
      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("factsheet")}
          className="cursor-pointer bg-[url('./assets/factsheet.jpg')] h-[8rem] w-[8rem] md:h-[10rem]  md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Fact Sheet</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("offers")}
          className="cursor-pointer bg-[url('./assets/offers.webp')] bg-center h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Offers</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("brochure")}
          className="cursor-pointer bg-[url('./assets/brochures.webp')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Brochures</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("resort")}
          className="cursor-pointer bg-[url('./assets/resortmap.png')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Resort Map</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("webapp")}
          className="cursor-pointer bg-[url('./assets/webapp.png')] border-[2px] bg-center h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Fairmont WebApp</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("events")}
          className="cursor-pointer bg-[url('./assets/eventscalendar.jpg')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-center bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Events Calendar</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("video")}
          className="cursor-pointer bg-[url('./assets/videos.jpg')] h-[8rem] border-[2px] bg-center w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Videos</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("virtual")}
          className="cursor-pointer bg-[url('./assets/virtual.png')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Virtual Tour</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("img")}
          className="cursor-pointer bg-[url('./assets/photos.webp')] bg-center h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Photos</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("logo")}
          className="cursor-pointer bg-[url('./assets/logo.jpg')] border-[2px] bg-white bg-center h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-contain bg-no-repeat bg-black flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Logo</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("weddings")}
          className="cursor-pointer bg-[url('./assets/weddings.png')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Weddings</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("reservations")}
          className="cursor-pointer bg-[url('./assets/reservations.png')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Reservations</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("menus")}
          className="cursor-pointer bg-[url('./assets/menus.png')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Menus</p>
      </div>

      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("golf")}
          className="cursor-pointer bg-[url('./assets/golf.webp')] bg-center h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Golf</p>
      </div>
      <div className="flex flex-col items-center max-w-[8rem] m-4">
        <div
          onClick={() => handleTypeClick("spa")}
          className="cursor-pointer bg-[url('./assets/spa.webp')] bg-center h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full"
        ></div>
        <p className="uppercase text-black mt-2 text-center">Spa</p>
      </div>
    </div>
  );
}
