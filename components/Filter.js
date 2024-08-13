"use client";

import React, { useState, useEffect } from "react";
import {
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export default function Filter({ onApplyFilterClick }) {
  const PHOTOS = [
    { label: "Accomodations", value: "accomodations" },
    { label: "Events", value: "events" },
    { label: "F&B", value: "f&b" },
    { label: "Experiences", value: "experiences" },
    { label: "Pool & Beaches", value: "pool" },
    { label: "Resort", value: "resort" },
    { label: "Activities", value: "activities" },
    { label: "Wellness", value: "wellness" },
  ];
  const [types, setTypes] = useState([]);

  function handleTypeCheckbox(event, type) {
    if (event.target.checked) {
      setTypes([...types, type]);
    } else {
      const updatedTypes = [...types];
      updatedTypes.splice(types.indexOf(type), 1);
      setTypes(updatedTypes);
    }
  }

  function handleDeleteAllClick() {
    setTypes([]);
  }

  return (
    <div className="md:block hidden">
      <p className="uppercase font-bold">FILTER</p>
      <List>
        <p className="font-bold">Photos</p>
        {PHOTOS.map((type, index) => (
          <ListItem className="p-0" key={index}>
            <label
              htmlFor={"vertical-list-" + type.label}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id={"vertical-list-" + type.label}
                  /*
                  onClick={() => {
                    onTypeCheckboxClick(type.value);
                  }}*/
                  onChange={(event) => {
                    handleTypeCheckbox(event, type.value);
                  }}
                  /*
                  onClick={() => {
                    addToCategoryFilter(type.value);
                  }}
                  */
                  checked={types.includes(type.value)}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                {type.label}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>

      <div className="flex flex-row gap-x-6 pt-6">
        <Button
          className="normal-case"
          variant="outlined"
          onClick={handleDeleteAllClick}
        >
          Borrar todo
        </Button>
        <Button
          className="normal-case"
          variant="outlined"
          onClick={() => {
            onApplyFilterClick(types);
          }}
        >
          Aplicar
        </Button>
      </div>
    </div>
  );
}
