"use client";

import React, { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";

function Item({ data }) {
  let preview = "";
  if (data.filetype == "pdf") {
    preview = "./pdf.png";
  } else if (data.filetype == "video") {
    preview = "./video.png";
  } else {
    preview = data.url;
  }

  return (
    <div>
      <div className="bg-gray-50 h-[15rem]">
        <img
          className={`h-full w-full ${
            data.filetype !== "image" && "object-contain"
          }`}
          src={preview}
        ></img>
      </div>
      <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2]">
        <div>
          <button
            onClick=""
            className="transition-all font-bold hover:tracking-wider"
          >
            {data.title}
          </button>
        </div>

        <div>
          <a href={data.url} target="_blank">
            <IconButton variant="text" className="rounded-full">
              <i className="fas fa-download" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
