"use client";

import React, { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";

function Item({ data }) {
  let preview = "";
  if (data.preview !== "") {
    preview = data.preview;
  } else {
    preview = data.url;
  }

  return (
    <div>
      <div className="bg-gray-50 h-[8rem] md:h-[15rem]">
        <img
          className={`h-full w-full ${
            data.filetype !== "image" && "object-cover"
          }`}
          src={preview}
        ></img>
      </div>
      <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2]">
        <div className="flex items-center">
          <a
            href={data.url}
            target="_blank"
            className="transition-all hover:tracking-wider font-itc-franklin"
          >
            {data.title}
          </a>
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
