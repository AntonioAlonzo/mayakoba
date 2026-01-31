"use client";

import React, { useState } from "react";
import {
  Checkbox,
  Card,
  Button,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

export default function Filter({ type, onApplyFilterClick }) {
  const COMBINED = [
    { label: "Meetings Layout", value: "mice-info-layout" },
    {
      label: "Photos",
      value: "mice-info",
      subcategories: [
        { label: "Tauro Restaurant", value: "mice-info-tauro" },
        { label: "Bassano", value: "mice-info-bassano" },
        { label: "Gaia Restaurant", value: "mice-info-gaia" },
        { label: "Fuego Restaurant", value: "mice-info-fuego" },
        { label: "Brisas Restaurant", value: "mice-info-brisas" },
        { label: "Hix Sushi Bar", value: "mice-info-hix" },
        { label: "El Pueblito", value: "mice-info-pueblito" },
        { label: "La Cantina", value: "mice-info-la-cantina" },
        { label: "Cielo", value: "mice-info-cielo" },
        { label: "Public Spaces", value: "mice-info-public" },
        {
          label: "Riviera Ballroom, Hallway & Terraza Lawn",
          value: "mice-info-ballroom",
        },
        { label: "Aerial Beach & Maykana", value: "mice-info-aerial" },
      ],
    },
  ];

  const COMBINED2 = [
    { label: "Spa", value: "photos-spa" },
    { label: "Rooms", value: "photos-rooms" },
    { label: "Aerial", value: "photos-aerial" },
    { label: "Residences", value: "photos-residences" },
    { label: "Public Spaces", value: "photos-public" },
    { label: "Meeting Spaces", value: "photos-meeting" },
    { label: "Adult Pool", value: "photos-adult-pool" },
    { label: "Boat Tour", value: "photos-boat-tour" },
  ];

  let list = "";
  if (type === "photos") {
    list = COMBINED2;
  } else if (type === "mice-info") {
    list = COMBINED;
  }

  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  function handleTypeClick(type) {
    onApplyFilterClick(type);
  }

  function toggleSubcategories(index) {
    setExpandedSubcategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  return (
    <div className="md:px-0 md:my-0 px-6 my-6">
      <p className="uppercase font-silk-serif">FILTER</p>

      <List>
        {list.map((type, index) => (
          <div key={index}>
            <ListItem
              className="p-0 cursor-pointer"
              onClick={() => handleTypeClick(type.value)}
            >
              <Typography
                color="blue-gray"
                className="font-itc-franklin px-3 py-2"
              >
                {type.label}
              </Typography>
              {type.subcategories && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubcategories(index);
                  }}
                  className="text-lg font-bold focus:outline-none"
                >
                  {expandedSubcategories[index] ? "-" : "+"}
                </button>
              )}
            </ListItem>
            {type.subcategories && expandedSubcategories[index] && (
              <List>
                {type.subcategories.map((subcategory, subIndex) => (
                  <div key={subIndex}>
                    <ListItem
                      className="p-0 cursor-pointer"
                      onClick={() => handleTypeClick(subcategory.value)}
                    >
                      <Typography
                        color="blue-gray"
                        className="font-itc-franklin px-3 py-2"
                      >
                        {subcategory.label}
                      </Typography>
                      {subcategory.subcategories && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubcategories(`${index}-${subIndex}`);
                          }}
                          className="text-lg font-bold focus:outline-none"
                        >
                          {expandedSubcategories[`${index}-${subIndex}`]
                            ? "-"
                            : "+"}
                        </button>
                      )}
                    </ListItem>
                    {subcategory.subcategories &&
                      expandedSubcategories[`${index}-${subIndex}`] && (
                        <List>
                          {subcategory.subcategories.map(
                            (nestedSub, nestedIndex) => (
                              <ListItem
                                className="p-0 cursor-pointer"
                                key={nestedIndex}
                                onClick={() => handleTypeClick(nestedSub.value)}
                              >
                                <Typography
                                  color="blue-gray"
                                  className="font-itc-franklin px-3 py-2"
                                >
                                  {nestedSub.label}
                                </Typography>
                              </ListItem>
                            )
                          )}
                        </List>
                      )}
                  </div>
                ))}
              </List>
            )}
          </div>
        ))}
      </List>
    </div>
  );
}
