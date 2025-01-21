"use client";

import React, { useState } from "react";

export default function FileTypeFilter({ onApplyFilterClick }) {
  const [showMiceSubcategories, setShowMiceSubcategories] = useState(false);

  function handleTypeClick(type) {
    if (type !== "mice") {
      setShowMiceSubcategories(false);
      onApplyFilterClick(type);
    } else {
      setShowMiceSubcategories(true);
    }
  }

  const className =
    "cursor-pointer h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] flex items-center justify-center rounded-full";

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mt-10 mx-3">
        <div className="flex flex-col items-center max-w-[8rem] m-4">
          <div
            onClick={() => handleTypeClick("factsheet")}
            className={`${className} bg-[url('./assets/factsheet.jpg')] bg-cover`}
          ></div>
          <p className="uppercase text-black mt-2 text-center">Fact Sheet</p>
        </div>

        <div className="flex flex-col items-center max-w-[8rem] m-4">
          <div
            onClick={() => handleTypeClick("offers")}
            className={`${className} bg-[url('./assets/offers.webp')] bg-center bg-cover`}
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
          <p className="uppercase text-black mt-2 text-center">
            Fairmont WebApp
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[8rem] m-4">
          <div
            onClick={() => handleTypeClick("events")}
            className="cursor-pointer bg-[url('./assets/eventscalendar.jpg')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-[center_left_-4rem] bg-no-repeat bg-cover flex items-center justify-center rounded-full"
          ></div>
          <p className="uppercase text-black mt-2 text-center">
            Events Calendar
          </p>
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
            onClick={() => handleTypeClick("mice")}
            className="cursor-pointer bg-[url('./assets/mice.jpg')] h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] bg-cover flex items-center justify-center rounded-full bg-center"
          ></div>
          <p className="uppercase text-black mt-2 text-center">Mice</p>
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
      {showMiceSubcategories && (
        <div className="flex md:gap-40 md:px-32 md:mt-16 px-2 gap-2 md:flex-row flex-col">
          <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-x-2 gap-y-7 ">
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-layout")}>
                  <img
                    className={`h-full w-full`}
                    src={
                      "https://www.fairmont-mayakoba.com/content/uploads/2025/01/meeting-rooms-layout.png"
                    }
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-layout")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Layout de salones
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-info")}>
                  <img
                    className={`h-full w-full`}
                    src={
                      "https://www.fairmont-mayakoba.com/content/uploads/2025/01/mice-info-preview.jpg"
                    }
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-info")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Información y fotos de venues para eventos
                  </a>
                </div>
              </div>
            </div>
            {/**  
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-kit")}>
                  <img
                    className={`h-full w-full`}
                    src={"./brochures.webp"}
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-kit")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Kit de banquetes
                  </a>
                </div>
              </div>
            </div>
            */}
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-videos")}>
                  <img
                    className={`h-full w-full`}
                    src={
                      "https://www.fairmont-mayakoba.com/content/uploads/2025/01/mice-video-preview.jpg"
                    }
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-videos")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Videos
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-tour")}>
                  <img
                    className={`h-full w-full`}
                    src={
                      "https://www.fairmont-mayakoba.com/content/uploads/2025/01/mice-tour-preview.jpg"
                    }
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-tour")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Tour virtual de los salones
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-map")}>
                  <img
                    className={`h-full w-full`}
                    src={
                      "https://www.fairmont-mayakoba.com/content/uploads/2025/01/Mayakoba-Complex-Map_2024.png"
                    }
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-map")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Mapa
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 h-[8rem] md:h-[12rem]">
                <a onClick={() => handleTypeClick("mice-presentation")}>
                  <img
                    className={`h-full w-full`}
                    src={
                      "https://www.fairmont-mayakoba.com/content/uploads/2025/01/mice-presentation-preview-1.png"
                    }
                  ></img>
                </a>
              </div>
              <div className="flex justify-between p-4 md:pt-6 bg-[#F2F2F2] h-[6rem]">
                <div className="flex items-center">
                  <a
                    onClick={() => handleTypeClick("mice-presentation")}
                    className="transition-all hover:tracking-wider font-itc-franklin"
                  >
                    Presentación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
