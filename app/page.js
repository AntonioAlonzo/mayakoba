"use client";

import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import { ASSETS } from "../components/data.js";
import Item from "../components/Item";

export default function Home() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(
      ASSETS.map((item) => (
        <Item key={item._ID} data={item} onItemClick={handleItemClick}></Item>
      ))
    );
  }, []);

  function handleApplyFilterClick(types) {
    setItemList(
      ASSETS.filter((item) => {
        let filter = true;

        if (types.length) {
          filter = types.includes(item.type);
        }

        return filter;
      }).map((item) => {
        return (
          <Item key={item._ID} data={item} onItemClick={handleItemClick}></Item>
        );
      })
    );
  }

  function handleItemClick() {}

  return (
    <div className=" bg-white">
      <div className="text-center">
        <h2 className="text-center text-[2rem] w-[35rem] mx-auto">
          <span className="italic">Welcome</span> to FAIRMONT MAYAKOBA{" "}
          <span className="italic">brand asset</span> MANAGEMENT SITE
        </h2>

        <p className="text-center w-[30rem] mx-auto mt-10">
          Escape to a tropical paradise in the lush rainforest of Mexico’s
          Riviera Maya. Discover our magnificent 594-acre private community on
          the Caribbean shoreline, which is newly renovated and totally
          reimagined.
        </p>
      </div>

      <h2 className="uppercase text-center text-[2rem] mt-16">
        Assets | Fairmont Mayakoba
      </h2>
      <main className="grid md:grid-cols-[1fr_2fr] md:p-10 p-6">
        <div>
          <Filter onApplyFilterClick={handleApplyFilterClick}></Filter>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-7 md:gap-y-16">
          {itemList}
        </div>
      </main>
    </div>
  );
}
