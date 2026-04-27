"use client";
import React from "react";
import { IconButton } from "@material-tailwind/react";

function Item({ data }) {
  let preview = data.preview !== "" ? data.preview : data.url;

  // Extrae fecha del título (formatos: DD/MM/YY o DD/MM/YYYY)
  const dateMatch = data.title.match(/(\d{1,2}\/\d{1,2}\/\d{2,4})/);
  const dateStr = dateMatch ? dateMatch[1] : null;

  // Limpia el título quitando la fecha
  const cleanTitle = data.title
    .replace(/\s*\d{1,2}\/\d{1,2}\/\d{2,4}/, "")
    .trim();

  return (
    <div className="h-full flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="bg-gray-100 h-[8rem] md:h-[12rem] flex-shrink-0 overflow-hidden">
        <a href={data.url} target="_blank">
          <img
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            src={preview}
          />
        </a>
      </div>
      <div className="flex justify-between items-start px-3 py-3 bg-[#F2F2F2] flex-1 min-h-[4rem]">
        <div className="flex flex-col flex-1 pr-2">
          <a
            href={data.url}
            target="_blank"
            className="font-itc-franklin text-xs md:text-sm leading-tight line-clamp-2 hover:underline"
            title={data.title}
          >
            {cleanTitle}
          </a>
          {dateStr && (
            <span className="text-[10px] text-gray-400 mt-1 font-itc-franklin">
              Updated: {dateStr}
            </span>
          )}
        </div>
        <a href={data.url} target="_blank" className="flex-shrink-0">
          <IconButton variant="text" className="rounded-full w-8 h-8">
            <i className="fas fa-download text-xs" />
          </IconButton>
        </a>
      </div>
    </div>
  );
}

export default Item;
