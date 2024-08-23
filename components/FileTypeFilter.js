"use client";

import React, { useState } from "react";

export default function FileTypeFilter({ onApplyFilterClick }) {
  function handleTypeClick(type) {
    onApplyFilterClick(type);
  }

  return (
    <div className="flex md:gap-x-10 justify-center mt-10 flex-col md:flex-row">
      <div
        onClick={() => handleTypeClick("img")}
        className="cursor-pointer bg-[url('/photos.png')] h-[10rem] w-full md:h-[20rem] md:w-[20rem] bg-cover flex items-center justify-center"
      >
        <p className="uppercase text-white">Photos</p>
      </div>

      <div
        onClick={() => handleTypeClick("video")}
        className="cursor-pointer bg-[url('/videos.png')] h-[10rem] w-full md:h-[20rem] md:w-[20rem] bg-cover flex items-center justify-center"
      >
        <p className="uppercase text-white">Videos</p>
      </div>

      <div
        onClick={() => handleTypeClick("other")}
        className="cursor-pointer bg-[url('/other.png')] h-[10rem] w-full md:h-[20rem] md:w-[20rem] bg-cover flex items-center justify-center"
      >
        <p className="uppercase text-white">Other Assets</p>
      </div>
    </div>
  );
}
